// script.js (final with title hide/show)
const ORIGINAL_TIME = 30;

const grid = document.getElementById("grid");
const timeBar = document.getElementById("time-bar");
const gameOver = document.getElementById("game-over");
const startBtn = document.getElementById("start-btn");
const timeBarContainer = document.getElementById("time-bar-container");
const gameTitle = document.getElementById("game-title");

let timeLeft = ORIGINAL_TIME;
let current = 1;
let cells = [];
let timer = null;
let shuffler = null;

// Update time bar UI immediately
function updateTimeBar() {
  const percent = Math.max(0, (timeLeft / ORIGINAL_TIME) * 100);
  timeBar.style.width = percent + "%";

  if (timeLeft > 20) timeBar.style.background = "green";
  else if (timeLeft > 10) timeBar.style.background = "orange";
  else timeBar.style.background = "red";
}

// Generate shuffled numbers
function shuffleNumbers() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers;
}

// Render grid and preserve disabled state for numbers < current
function renderGrid(numbers) {
  grid.innerHTML = "";
  cells = [];
  numbers.forEach(num => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.textContent = num;

    // Keep clicked numbers disabled across shuffles
    if (num < current) div.classList.add("disabled");

    div.addEventListener("click", () => handleClick(num, div));
    grid.appendChild(div);
    cells.push(div);
  });
}

// Handle number click
function handleClick(num, div) {
  // Ignore clicks if game not running
  if (!timer) return;

  if (num === current && !div.classList.contains("disabled")) {
    div.classList.add("disabled");
    current++;
    if (current > 20) {
      endGame(true);
    }
  } else {
    // Penalty on wrong click: -1 second and immediate UI update
    timeLeft = Math.max(0, timeLeft - 1);
    updateTimeBar();
    if (timeLeft <= 0) endGame(false);
  }
}

// Start timer + shuffler
function startTimer() {
  // Clear any existing timers just in case
  if (timer) clearInterval(timer);
  if (shuffler) clearInterval(shuffler);

  timer = setInterval(() => {
    timeLeft--;
    updateTimeBar();

    if (timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);

  shuffler = setInterval(() => {
    if (timeLeft <= 0 || current > 20) {
      clearInterval(shuffler);
      shuffler = null;
      return;
    }
    renderGrid(shuffleNumbers());
  }, 1500);
}

// Start or restart the game
function startGame() {
  // Hide title when playing
  gameTitle.style.display = "none";

  // Reset/clear any running intervals
  if (timer) { clearInterval(timer); timer = null; }
  if (shuffler) { clearInterval(shuffler); shuffler = null; }

  // Reset game state
  timeLeft = ORIGINAL_TIME;
  current = 1;
  cells = [];

  // UI reset
  gameOver.style.display = "none";
  grid.style.display = "grid";
  timeBarContainer.style.display = "block";
  startBtn.style.display = "none";
  timeBar.style.width = "100%";
  updateTimeBar();

  // Render first shuffled grid and start timers
  renderGrid(shuffleNumbers());
  startTimer();
}

// End game cleanup and show restart button
function endGame(won) {
  if (timer) { clearInterval(timer); timer = null; }
  if (shuffler) { clearInterval(shuffler); shuffler = null; }

  gameOver.style.display = "block";
  gameOver.textContent = won ? "🎉 You Win!" : "⏳ Game Over!";
  grid.innerHTML = "";
  startBtn.style.display = "block";
  startBtn.textContent = "Restart";

  // Show title again after game ends
  gameTitle.style.display = "block";
}

// Hook up start button
startBtn.addEventListener("click", startGame);

// Initial UI state (waiting for start)
grid.style.display = "none";
timeBarContainer.style.display = "none";
gameOver.style.display = "none";
timeBar.style.width = "100%";
updateTimeBar();

// ========== PERMUTATION CALCULATOR LOGIC ==========

// ========== TAB NAVIGATION ==========

const gameTab = document.getElementById("game-tab");
const calculatorTab = document.getElementById("calculator-tab");
const gameContainer = document.getElementById("game-container");
const calculatorPanel = document.getElementById("calculator-panel");

// Switch to Game view
gameTab.addEventListener("click", function() {
  gameTab.classList.add("active");
  calculatorTab.classList.remove("active");
  gameContainer.classList.add("active");
  calculatorPanel.classList.remove("active");
});

// Switch to Calculator view
calculatorTab.addEventListener("click", function() {
  calculatorTab.classList.add("active");
  gameTab.classList.remove("active");
  calculatorPanel.classList.add("active");
  gameContainer.classList.remove("active");
});

// ========== PERMUTATION CALCULATOR LOGIC ==========

const numberInput = document.getElementById("number-input");
const calculateBtn = document.getElementById("calculate-btn");
const resultContainer = document.getElementById("result-container");
const permutationsList = document.getElementById("permutations-list");

// Factorial function
function factorial(n) {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Count digit frequencies in a number string
function countDigitFrequencies(numStr) {
  const frequencies = {};
  for (let digit of numStr) {
    frequencies[digit] = (frequencies[digit] || 0) + 1;
  }
  return frequencies;
}

// Calculate number of unique permutations using formula: n! / (n1! × n2! × ... × nk!)
function calculatePermutations(numStr) {
  const n = numStr.length;
  const frequencies = countDigitFrequencies(numStr);
  
  // Calculate denominator: product of factorials of frequencies
  let denominator = 1;
  for (let digit in frequencies) {
    denominator *= factorial(frequencies[digit]);
  }
  
  // Calculate numerator: factorial of total digits
  const numerator = factorial(n);
  
  // Result
  const result = numerator / denominator;
  
  return {
    total: result,
    numerator: numerator,
    denominator: denominator,
    frequencies: frequencies,
    n: n
  };
}

// Generate all unique permutations
function generatePermutations(numStr) {
  const digits = numStr.split('');
  const result = [];
  const used = new Set();
  
  // Sort digits to handle duplicates more efficiently
  digits.sort();
  
  function permute(current, available) {
    if (current.length === digits.length) {
      const perm = current.join('');
      if (!used.has(perm)) {
        used.add(perm);
        result.push(perm);
      }
      return;
    }
    
    const usedDigits = new Set();
    for (let i = 0; i < available.length; i++) {
      const digit = available[i];
      // Skip if we've already used this digit at this position
      if (usedDigits.has(digit)) continue;
      
      usedDigits.add(digit);
      const newAvailable = [...available];
      newAvailable.splice(i, 1);
      permute([...current, digit], newAvailable);
    }
  }
  
  permute([], digits);
  return result.sort();
}

// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
}

// Handle calculate button click
calculateBtn.addEventListener("click", function() {
  const inputValue = numberInput.value.trim();
  
  // Validate input
  if (!inputValue) {
    alert("Please enter a number!");
    return;
  }
  
  if (!/^\d+$/.test(inputValue)) {
    alert("Please enter only digits (0-9)!");
    return;
  }
  
  if (inputValue.length > 10) {
    alert("Number is too long! Maximum 10 digits.");
    return;
  }
  
  // Calculate permutations
  const permutations = generatePermutations(inputValue);
  
  // Display all permutations
  permutationsList.innerHTML = "";
  permutations.forEach(perm => {
    const item = document.createElement("div");
    item.className = "permutation-item";
    item.textContent = perm;
    item.title = "Click to copy";
    
    // Add click event to copy number
    item.addEventListener("click", async function() {
      const success = await copyToClipboard(perm);
      if (success) {
        // Visual feedback - add copied class
        item.classList.add("copied");
        item.textContent = "✓ Copied!";
        
        // Reset after 1 second
        setTimeout(() => {
          item.classList.remove("copied");
          item.textContent = perm;
        }, 1000);
      } else {
        // Fallback feedback
        const originalText = item.textContent;
        item.textContent = "Copy failed";
        setTimeout(() => {
          item.textContent = originalText;
        }, 1000);
      }
    });
    
    permutationsList.appendChild(item);
  });
  
  // Show result container
  resultContainer.style.display = "block";
});

// Allow Enter key to trigger calculation
numberInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    calculateBtn.click();
  }
});