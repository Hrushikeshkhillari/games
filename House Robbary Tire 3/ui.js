const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const timerDisplay = document.getElementById("timerDisplay");
const lifeDisplay = document.getElementById("lifeDisplay");
const stageDisplay = document.getElementById("stageDisplay");
const statusDisplay = document.getElementById("statusDisplay");
const startForm = document.getElementById("gameOptions");
const lifeInput = document.getElementById("lifeInput");
const timeInput = document.getElementById("timeInput");
const abortBtn = document.getElementById("abortBtn");
const scrambleTrack = document.getElementById("scrambleTrack");
const codeSlotElements = Array.from(document.querySelectorAll("#codeSlots .code-slot"));
const keypadElements = new Map();
document.querySelectorAll("#keyGrid .key").forEach((el) => {
  const label = el.textContent.trim();
  const numeric = Number.parseInt(label, 10);
  if (!Number.isNaN(numeric)) {
    keypadElements.set(numeric, el);
  }
});
const scrambleSegments = [];

const GAME = {
  minTime: 40,
  maxTime: 180,
  maxLife: 6,
  totalStages: 4,
  scrambleSegments: 34
};

const GRID = {
  cols: 6,
  rows: 5,
  originX: 140,
  originY: 140,
  gapX: 110,
  gapY: 92,
  radius: 26,
  selectorRadius: 36
};

const animationState = {
  frameToggle: true,
  dialog: null,
  dialogText: ""
};

const state = {
  timer: 0,
  timeString: ["-", "-", "-", "-"],
  availableLife: 0,
  activeStage: 1,
  activeColumn: 0,
  activeRow: 0,
  passcodePattern: [],
  passcodeResult: [],
  fakePatterns: [],
  selectedDots: {
    correct: [],
    incorrect: []
  },
  isPlayerInputDisabled: true,
  showFakePattern: false,
  currentPatternDots: [],
  scrambleIndex: 0,
  gameWon: false,
  gameActive: false,
  statusText: "Idle"
};

const audioLibrary = {
  intro: new Howl({ src: ["./audio/intro.mp3"], volume: 0.35 }),
  success: new Howl({ src: ["./audio/hack_success.mp3"], volume: 0.3 }),
  fail: new Howl({ src: ["./audio/hack_fail.mp3"], volume: 0.3 }),
  keypress: new Howl({ src: ["./audio/keypress.mp3"], volume: 0.15 }),
  correct: new Howl({ src: ["./audio/correct.mp3"], volume: 0.15 }),
  incorrect: new Howl({ src: ["./audio/incorrect.mp3"], volume: 0.2 }),
  fake: new Howl({ src: ["./audio/fake_pattern.mp3"], volume: 0.25 }),
  real: new Howl({ src: ["./audio/real_pattern.mp3"], volume: 0.25 })
};

const innerCircles = (() => {
  const data = [[]];
  for (let c = 1; c <= GRID.cols; c += 1) {
    const column = [];
    for (let r = 1; r <= GRID.rows; r += 1) {
      column.push({
        x: GRID.originX + (c - 1) * GRID.gapX,
        y: GRID.originY + (r - 1) * GRID.gapY
      });
    }
    data.push(column);
  }
  return data;
})();

let timerInterval = null;
let scrambleInterval = null;
let animationFrame = null;
let dialogTimeout = null;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function buildScrambleSegments() {
  if (!scrambleTrack) {
    return;
  }
  scrambleTrack.innerHTML = "";
  scrambleSegments.length = 0;
  for (let i = 0; i < GAME.scrambleSegments; i += 1) {
    const segment = document.createElement("div");
    segment.className = "scramble-segment";
    scrambleTrack.appendChild(segment);
    scrambleSegments.push(segment);
  }
  if (scrambleSegments.length > 0) {
    scrambleSegments[scrambleSegments.length - 1].style.marginRight = "0";
  }
}

function renderScrambleSegments() {
  scrambleSegments.forEach((segment, index) => {
    segment.classList.toggle("active", index < state.scrambleIndex);
  });
}

function renderLives() {
  if (!lifeDisplay) {
    return;
  }
  const dots = lifeDisplay.querySelectorAll(".attempt-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index < state.availableLife);
  });
}

function renderCodeSlots() {
  codeSlotElements.forEach((slot, index) => {
    const value = state.passcodeResult[index];
    const shouldReveal = state.gameWon || index < state.activeStage - 1;
    slot.textContent = shouldReveal && value !== undefined ? `${value}` : "";
    slot.classList.toggle("active", shouldReveal && value !== undefined);
  });
}

buildScrambleSegments();

function playAudio(name) {
  const track = audioLibrary[name];
  if (track) {
    track.play();
  }
}

function secondsToString(totalSeconds) {
  const minutes = Math.max(0, Math.floor(totalSeconds / 60));
  const seconds = Math.max(0, totalSeconds % 60);
  const minDigits = minutes.toString().padStart(2, "0").split("");
  const secDigits = seconds.toString().padStart(2, "0").split("");
  return [...minDigits, ...secDigits];
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randNumExclusive(n, a, b) {
  const numbers = [];
  for (let i = a; i <= b; i += 1) {
    numbers.push(i);
  }
  let shuffled = shuffle(numbers);
  while (shuffled.join("") === numbers.join("")) {
    shuffled = shuffle(numbers);
  }
  return shuffled.slice(0, n);
}

function generatePattern(n, a, b) {
  const base = shuffle([1, 2, 3, 4, 5]);
  base.push(Math.floor(Math.random() * (b - a + 1)) + a);
  const mixed = shuffle(base);
  return mixed.slice(0, n);
}

function generateFakePattern() {
  const sequences = [];
  const amount = Math.floor(Math.random() * 4) + 4; // 4-7 sequences
  for (let i = 0; i < amount; i += 1) {
    sequences.push(generatePattern(6, 1, 5));
  }
  return sequences;
}

function resetState() {
  state.timer = 0;
  state.availableLife = 0;
  state.timeString = ["-", "-", "-", "-"];
  state.activeStage = 1;
  state.activeColumn = 0;
  state.activeRow = 0;
  state.passcodePattern = [];
  state.passcodeResult = [];
  state.fakePatterns = [];
  state.selectedDots.correct = [];
  state.selectedDots.incorrect = [];
  state.isPlayerInputDisabled = true;
  state.showFakePattern = false;
  state.currentPatternDots = [];
  state.scrambleIndex = 0;
  state.gameWon = false;
  state.gameActive = false;
  state.statusText = "Idle";
}

function updateHud() {
  if (timerDisplay) {
    timerDisplay.textContent = `${state.timeString[0]}${state.timeString[1]}:${state.timeString[2]}${state.timeString[3]}`;
  }
  if (stageDisplay) {
    stageDisplay.textContent = state.activeStage;
  }
  if (statusDisplay) {
    statusDisplay.textContent = state.statusText.toUpperCase();
  }
  renderLives();
  renderCodeSlots();
  renderScrambleSegments();
}

function toggleAnimationOverlay() {
  animationState.frameToggle = !animationState.frameToggle;
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!state.gameActive) {
      return;
    }
    if (state.timer <= 0) {
      clearInterval(timerInterval);
      onTimerEnd();
      return;
    }
    state.timer -= 1;
    state.timeString = secondsToString(state.timer);
    toggleAnimationOverlay();
    updateHud();
  }, 1000);
}

function startScramble() {
  clearInterval(scrambleInterval);
  const stepDuration = (state.timer * 1000) / GAME.scrambleSegments;
  state.scrambleIndex = GAME.scrambleSegments;
  renderScrambleSegments();
  scrambleInterval = setInterval(() => {
    if (!state.gameActive) {
      clearInterval(scrambleInterval);
      return;
    }
    state.scrambleIndex = Math.max(0, state.scrambleIndex - 1);
    renderScrambleSegments();
    if (state.scrambleIndex === 0) {
      clearInterval(scrambleInterval);
    }
  }, Math.max(200, stepDuration));
}

function stopLoops() {
  clearInterval(timerInterval);
  clearInterval(scrambleInterval);
  if (dialogTimeout) {
    clearTimeout(dialogTimeout);
    dialogTimeout = null;
  }
}

function setStatus(text) {
  state.statusText = text;
  updateHud();
}

function drawCircle({ x, y }, radius, color, fill = true) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  if (fill) {
    ctx.fillStyle = color;
    ctx.fill();
  } else {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#02050b");
  gradient.addColorStop(1, "#020308");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.globalAlpha = animationState.frameToggle ? 0.15 : 0.08;
  ctx.fillStyle = animationState.frameToggle ? "#073038" : "#052229";
  ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);
  ctx.restore();
}

function drawGrid() {
  ctx.strokeStyle = "rgba(71, 215, 209, 0.2)";
  for (let c = 1; c <= GRID.cols; c += 1) {
    for (let r = 1; r <= GRID.rows; r += 1) {
      drawCircle(innerCircles[c][r - 1], GRID.radius, "rgba(9, 40, 46, 0.7)", true);
      drawCircle(innerCircles[c][r - 1], GRID.radius, "rgba(71,215,209,0.4)", false);
    }
  }
}

function drawSelectedDots() {
  state.selectedDots.correct.forEach(({ col, row }) => {
    drawCircle(innerCircles[col][row - 1], GRID.radius, "rgba(83, 255, 184, 0.9)");
  });
  state.selectedDots.incorrect.forEach(({ col, row }) => {
    drawCircle(innerCircles[col][row - 1], GRID.radius * 0.4, "rgba(255, 118, 118, 0.9)");
  });
}

function drawCurrentPattern() {
  if (!state.showFakePattern || state.currentPatternDots.length === 0) {
    return;
  }
  ctx.save();
  ctx.globalAlpha = 0.7;
  state.currentPatternDots.forEach((dot) => {
    drawCircle(dot, GRID.radius, "rgba(0, 153, 255, 0.85)");
  });
  ctx.restore();
}

function drawSelector() {
  if (state.activeColumn === 0 || state.activeRow === 0) {
    return;
  }
  drawCircle(innerCircles[state.activeColumn][state.activeRow - 1], GRID.selectorRadius, "rgba(16,255,243,0.08)");
  drawCircle(
    innerCircles[state.activeColumn][state.activeRow - 1],
    GRID.selectorRadius,
    "rgba(16,255,243,0.7)",
    false
  );
}

function drawTimer() {
  // timer is rendered in DOM
}

function drawScrambleBar() {
  // handled via DOM track
}

function drawCodeSlots() {
  // rendered via DOM slots
}

function drawKeypad() {
  keypadElements.forEach((element) => {
    element.classList.remove("active");
  });
  const revealedDigits = state.gameWon
    ? state.passcodeResult
    : state.passcodeResult.slice(0, Math.min(state.activeStage - 1, GAME.totalStages));
  revealedDigits.forEach((digit) => {
    const element = keypadElements.get(digit);
    if (element) {
      element.classList.add("active");
    }
  });
}

function drawDialog() {
  if (!animationState.dialog) {
    return;
  }
  const text =
    animationState.dialogText ||
    (animationState.dialog === "success"
      ? "PATTERN ACCEPTED"
      : animationState.dialog === "fail"
      ? "PATTERN REJECTED"
      : "SYSTEM MESSAGE");
  const strokeColor =
    animationState.dialog === "success"
      ? "#53ffb8"
      : animationState.dialog === "info"
      ? "#7fffe9"
      : "#ff6b81";
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0.65)";
  ctx.fillRect(200, 300, 560, 120);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 3;
  ctx.strokeRect(200, 300, 560, 120);
  ctx.fillStyle = "#ffffff";
  ctx.font = "28px 'Share Tech Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText(text, canvas.width / 2, 368);
  ctx.restore();
}

function render() {
  drawBackground();
  drawGrid();
  drawSelectedDots();
  drawCurrentPattern();
  drawSelector();
  drawTimer();
  drawScrambleBar();
  drawCodeSlots();
  drawKeypad();
  drawDialog();

  animationFrame = requestAnimationFrame(render);
}

function setActiveRow(row) {
  if (row >= 1 && row <= GRID.rows) {
    state.activeRow = row;
  }
}

function handleIncorrectSelection() {
  playAudio("incorrect");
  const exists = state.selectedDots.incorrect.some(
    (dot) => dot.row === state.activeRow && dot.col === state.activeColumn
  );
  if (!exists) {
    state.selectedDots.incorrect.push({ row: state.activeRow, col: state.activeColumn });
  }
  if (state.availableLife > 0) {
    state.availableLife -= 1;
    updateHud();
  }
  if (state.availableLife <= 0) {
    state.availableLife = 0;
    updateHud();
    failGame("Lives ran out");
  }
}

async function blinkDialog(config = {}) {
  const options = typeof config === "boolean" ? { style: config ? "success" : "fail" } : config || {};
  const style = options.style || "success";
  const duration = options.duration ?? 3000;
  const blinkInterval = options.interval ?? 300;
  const resolvedText =
    options.text ||
    (style === "success"
      ? "PATTERN ACCEPTED"
      : style === "fail"
      ? "PATTERN REJECTED"
      : "SYSTEM MESSAGE");

  if (dialogTimeout) {
    clearTimeout(dialogTimeout);
    dialogTimeout = null;
  }

  animationState.dialog = style;
  animationState.dialogText = resolvedText;

  return new Promise((resolve) => {
    const endTime = Date.now() + duration;
    const toggle = () => {
      if (Date.now() >= endTime) {
        animationState.dialog = null;
        animationState.dialogText = "";
        dialogTimeout = null;
        resolve();
        return;
      }
      animationState.dialog = animationState.dialog ? null : style;
      if (animationState.dialog) {
        animationState.dialogText = resolvedText;
      }
      dialogTimeout = setTimeout(toggle, blinkInterval);
    };

    dialogTimeout = setTimeout(toggle, blinkInterval);
  });
}

async function handleCorrectColumnCompletion() {
  if (state.activeColumn < GRID.cols) {
    state.activeColumn += 1;
    return;
  }

  if (state.activeStage < GAME.totalStages) {
    state.activeStage += 1;
    state.activeColumn = 0;
    state.activeRow = 0;
    state.selectedDots.correct = [];
    state.selectedDots.incorrect = [];
    state.isPlayerInputDisabled = true;
    await blinkDialog({ style: "success", duration: 1200 });
    prepareNewStage();
    await previewPatterns(true);
    if (!state.gameActive) {
      return;
    }
    state.isPlayerInputDisabled = false;
    state.activeColumn = 1;
    setStatus("Continue cracking");
    updateHud();
  } else {
    state.activeStage += 1;
    state.isPlayerInputDisabled = true;
    state.gameWon = true;
    await blinkDialog({ style: "success", duration: 3000 });
    succeedGame("Hack successful");
  }
}

async function previewPatterns(skipIntro = false) {
  state.fakePatterns = generateFakePattern();

  if (!skipIntro) {
    playAudio("intro");
    state.statusText = "Booting sequence";
    updateHud();
    blinkDialog({ style: "info", text: "SYSTEM INITIALIZING", duration: 3000 });
    await wait(3500);
    if (!state.gameActive) {
      return;
    }
  }

  state.statusText = "Memorize the pattern";
  updateHud();
  state.isPlayerInputDisabled = true;

  for (const pattern of state.fakePatterns) {
    if (!state.gameActive) {
      return;
    }
    state.showFakePattern = true;
    state.currentPatternDots = pattern.map((rowValue, idx) => innerCircles[idx + 1][rowValue - 1]);
    playAudio("fake");
    await wait(800);
    state.showFakePattern = false;
    state.currentPatternDots = [];
    await wait(200);
  }

  for (let i = 0; i < 2; i += 1) {
    if (!state.gameActive) {
      return;
    }
    state.showFakePattern = true;
    state.currentPatternDots = state.passcodePattern.map((rowValue, idx) => innerCircles[idx + 1][rowValue - 1]);
    playAudio("real");
    await wait(300);
    state.showFakePattern = false;
    state.currentPatternDots = [];
    await wait(200);
  }
}

function prepareNewStage() {
  state.passcodePattern = generatePattern(6, 1, 5);
  while (!state.passcodePattern.length) {
    state.passcodePattern = generatePattern(6, 1, 5);
  }
}

async function startGame(life, time) {
  stopLoops();
  resetState();
  state.gameActive = true;
  state.availableLife = life;
  state.timer = time;
  state.timeString = secondsToString(time);
  state.passcodeResult = randNumExclusive(4, 0, 9);
  prepareNewStage();
  state.activeStage = 1;
  state.scrambleIndex = GAME.scrambleSegments;
  state.statusText = "Initializing";
  updateHud();

  startTimer();
  startScramble();
  await previewPatterns();
  if (!state.gameActive) {
    return;
  }
  state.activeColumn = 1;
  state.activeRow = 0;
  state.isPlayerInputDisabled = false;
  setStatus("Replicate the pattern");
}

function succeedGame(reason) {
  state.statusText = reason;
  state.gameWon = true;
  state.gameActive = false;
  stopLoops();
  playAudio("success");
  updateHud();
}

function failGame(reason) {
  if (!state.gameActive) {
    return;
  }
  state.statusText = reason;
  state.gameActive = false;
  state.isPlayerInputDisabled = true;
  stopLoops();
  playAudio("fail");
  blinkDialog(false);
  updateHud();
}

function onTimerEnd() {
  if (!state.gameActive) {
    return;
  }
  state.timer = 0;
  state.timeString = ["0", "0", "0", "0"];
  failGame("Ran out of time");
}

function abortGame(reason = "Aborted") {
  if (!state.gameActive) {
    return;
  }
  state.gameActive = false;
  state.isPlayerInputDisabled = true;
  state.statusText = reason;
  stopLoops();
  updateHud();
}

function handleSelection() {
  if (
    state.activeColumn === 0 ||
    state.activeColumn > GRID.cols ||
    state.activeRow === 0 ||
    state.isPlayerInputDisabled
  ) {
    return;
  }
  if (state.passcodePattern[state.activeColumn - 1] === state.activeRow) {
    const exists = state.selectedDots.correct.some(
      (dot) => dot.row === state.activeRow && dot.col === state.activeColumn
    );
    if (!exists) {
      playAudio("correct");
      state.selectedDots.correct.push({ row: state.activeRow, col: state.activeColumn });
    }
    handleCorrectColumnCompletion();
  } else {
    handleIncorrectSelection();
  }
}

function handleKeydown(e) {
  if (!state.gameActive) {
    return;
  }
  if (state.isPlayerInputDisabled) {
    e.preventDefault();
    return;
  }
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      if (state.activeRow > 1) {
        playAudio("keypress");
        setActiveRow(state.activeRow - 1);
      }
      break;
    case "ArrowDown":
      e.preventDefault();
      if (state.activeRow < GRID.rows) {
        playAudio("keypress");
        setActiveRow(state.activeRow + 1);
      }
      break;
    case "Enter":
      e.preventDefault();
      handleSelection();
      break;
    case "Backspace":
      e.preventDefault();
      abortGame("Aborted");
      break;
    default:
      break;
  }
}

canvas.addEventListener("click", (event) => {
  if (!state.gameActive || state.isPlayerInputDisabled) {
    return;
  }
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  for (let col = 1; col <= GRID.cols; col += 1) {
    for (let row = 1; row <= GRID.rows; row += 1) {
      const dot = innerCircles[col][row - 1];
      const dist = Math.hypot(dot.x - x, dot.y - y);
      if (dist <= GRID.selectorRadius) {
        state.activeColumn = col;
        state.activeRow = row;
        playAudio("keypress");
        return;
      }
    }
  }
});

window.addEventListener("keydown", handleKeydown);

startForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const life = Number.parseInt(lifeInput.value, 10);
  const time = Number.parseInt(timeInput.value, 10);

  if (Number.isNaN(life) || life < 1 || life > GAME.maxLife) {
    alert(`Lives must be between 1 and ${GAME.maxLife}.`);
    return;
  }
  if (Number.isNaN(time) || time < GAME.minTime || time > GAME.maxTime) {
    alert(`Time must be between ${GAME.minTime} and ${GAME.maxTime} seconds.`);
    return;
  }

  setStatus("Preparing...");
  await startGame(life, time);
});

abortBtn.addEventListener("click", () => {
  abortGame("Aborted");
});

function init() {
  resetState();
  updateHud();
  state.timeString = secondsToString(Number.parseInt(timeInput.value, 10));
  updateHud();
  render();
}

init();