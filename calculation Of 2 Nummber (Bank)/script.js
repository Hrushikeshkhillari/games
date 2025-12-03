const INITIAL_DELAY = 5000; // 5 seconds
const GAME_TIMER = 45; // 45 seconds
const TOTAL_ROUNDS = 10;
const MAX_FAILURES = 3;
const RESULT_DISPLAY_TIME = 3000; // 3 seconds

const loadingScreen = document.getElementById('loading-screen');
const gameInterface = document.getElementById('game-interface');
const resultScreen = document.getElementById('result-screen');
const timerBar = document.getElementById('timer-bar');
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');
const operator = document.getElementById('operator');
const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');

let currentRound = 0;
let failures = 0;
let currentAnswer = null;
let gameActive = false;
let timerAnimation = null;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumbers() {
  const digitCountA = randomInt(1, 3); // 1, 2, or 3 digits
  const digitCountB = randomInt(1, 3);
  
  const minA = digitCountA === 1 ? 1 : digitCountA === 2 ? 10 : 100;
  const maxA = digitCountA === 1 ? 9 : digitCountA === 2 ? 99 : 999;
  const minB = digitCountB === 1 ? 1 : digitCountB === 2 ? 10 : 100;
  const maxB = digitCountB === 1 ? 9 : digitCountB === 2 ? 99 : 999;
  
  let numA = randomInt(minA, maxA);
  let numB = randomInt(minB, maxB);
  const useAddition = Math.random() > 0.5;
  
  let result;
  if (useAddition) {
    result = numA + numB;
    // Ensure result is below 200
    while (result >= 200) {
      if (numA > numB) {
        numA = randomInt(minA, Math.min(maxA, 199 - numB));
      } else {
        numB = randomInt(minB, Math.min(maxB, 199 - numA));
      }
      result = numA + numB;
    }
    return { a: numA, b: numB, op: '+', result };
  } else {
    // For subtraction, ensure result is always positive (>= 0) and below 200
    // Ensure numA >= numB to prevent negative results
    if (numA < numB) {
      [numA, numB] = [numB, numA];
    }
    
    result = numA - numB;
    
    // Ensure result is below 200
    while (result >= 200) {
      // Reduce numA while keeping numA >= numB
      const maxAValue = Math.min(maxA, 199 + numB);
      numA = randomInt(Math.max(minA, numB), maxAValue);
      result = numA - numB;
    }
    
    // Final safety check: ensure result is never negative
    if (result < 0 || numA < numB) {
      // Swap if needed to ensure positive result
      [numA, numB] = [numB, numA];
      result = numA - numB;
    }
    
    return { a: numA, b: numB, op: '−', result };
  }
}

function startTimer() {
  timerBar.style.animation = 'none';
  timerBar.offsetHeight; // Trigger reflow
  timerBar.style.animation = `timer-countdown ${GAME_TIMER}s linear forwards`;
  
  timerAnimation = setTimeout(() => {
    endGame(false, 'Time expired!');
  }, GAME_TIMER * 1000);
}

function stopTimer() {
  if (timerAnimation) {
    clearTimeout(timerAnimation);
    timerAnimation = null;
  }
  timerBar.style.animationPlayState = 'paused';
}

function startRound() {
  if (!gameActive) return;
  
  currentRound++;
  
  if (currentRound > TOTAL_ROUNDS) {
    endGame(true, 'All rounds completed!');
    return;
  }
  
  if (failures >= MAX_FAILURES) {
    endGame(false, 'Too many failures!');
    return;
  }
  
  const equation = generateNumbers();
  numberA.textContent = equation.a;
  numberB.textContent = equation.b;
  operator.textContent = equation.op;
  currentAnswer = equation.result;
  
  answerInput.value = '';
  answerInput.focus();
  feedback.textContent = '';
}

function checkAnswer() {
  if (!gameActive) return;
  
  const userAnswer = parseInt(answerInput.value, 10);
  
  if (isNaN(userAnswer) || answerInput.value === '') {
    feedback.textContent = '';
    return;
  }
  
  // If answer is correct, immediately advance to next round
  if (userAnswer === currentAnswer) {
    feedback.textContent = 'Correct!';
    feedback.classList.remove('error');
    setTimeout(() => {
      startRound();
    }, 500);
  }
}

function endGame(success, message) {
  gameActive = false;
  stopTimer();
  answerForm.classList.add('is-disabled');
  
  setTimeout(() => {
    gameInterface.classList.remove('is-visible');
    gameInterface.setAttribute('aria-hidden', 'true');
    
    resultTitle.textContent = success ? 'SUCCESSFUL' : 'FAILED';
    resultTitle.className = `result-title ${success ? 'success' : 'failed'}`;
    resultMessage.textContent = message;
    
    resultScreen.classList.add('is-visible');
    resultScreen.setAttribute('aria-hidden', 'false');
    
    setTimeout(() => {
      resultScreen.classList.remove('is-visible');
      resultScreen.setAttribute('aria-hidden', 'true');
    }, RESULT_DISPLAY_TIME);
  }, 500);
}

function startGame() {
  loadingScreen.classList.add('is-hidden');
  gameInterface.classList.add('is-visible');
  gameInterface.setAttribute('aria-hidden', 'false');
  
  currentRound = 0;
  failures = 0;
  gameActive = true;
  
  startTimer();
  startRound();
}

// Event listeners - Auto-check answer as user types
let wrongAnswerTimeout = null;
answerInput.addEventListener('input', () => {
  checkAnswer();
  
  // Clear any existing timeout
  clearTimeout(wrongAnswerTimeout);
  
  // Check for wrong answer after user stops typing for 1.5 seconds
  const userAnswer = parseInt(answerInput.value, 10);
  if (!isNaN(userAnswer) && userAnswer !== currentAnswer && answerInput.value !== '') {
    wrongAnswerTimeout = setTimeout(() => {
      if (!gameActive) return;
      
      failures++;
      feedback.textContent = `Wrong! Correct answer: ${currentAnswer}`;
      feedback.classList.add('error');
      
      if (failures >= MAX_FAILURES) {
        setTimeout(() => {
          endGame(false, 'Too many failures!');
        }, 1500);
      } else {
        setTimeout(() => {
          startRound();
        }, 1500);
      }
    }, 1500); // Wait 1.5 seconds after user stops typing
  }
});

// Prevent form submission (no Enter needed)
answerForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

// Initialize: Wait 5 seconds, then start game
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(startGame, INITIAL_DELAY);
});
