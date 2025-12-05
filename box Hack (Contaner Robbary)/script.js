// ---------- Elements (must match your HTML) ----------
const startScreen = document.getElementById('start-screen');
const normalBtnStart = document.getElementById('normal-btn-start');
const hardBtnStart = document.getElementById('hard-btn-start');
const extremeBtnStart = document.getElementById('extreme-btn-start');
const insaneBtnStart = document.getElementById('insane-btn-start');
const ultraBtnStart = document.getElementById('ultra-btn-start');

const gameScreen = document.getElementById('game-screen');
const board = document.getElementById('board');
const msg = document.getElementById('msg');

// Timer bar will be created dynamically in buildBoard
let timerBar = null;

// ---------- State ----------
let ROWS = 20;
let COLS = 20;
let totalTime = 9;
let timeLeft = 0;
let timerInterval = null;

let path = [];         // ordered array of {r,c}
let occupiedSet = null; // set of "r_c" strings for fast lookup
let player = null;
let acceptingInput = false;

// ---------- Utilities ----------
const keyFor = (r,c) => `${r}_${c}`;
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));

function isOccupied(r,c){
  return occupiedSet.has(keyFor(r,c));
}

// Count occupied in a rectangle (inclusive)
function countOccupiedRect(r0,c0,r1,c1){
  let cnt = 0;
  for(let rr = r0; rr <= r1; rr++){
    for(let cc = c0; cc <= c1; cc++){
      if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS) continue;
      if (isOccupied(rr,cc)) cnt++;
    }
  }
  return cnt;
}

// Safety check before placing a new cell at (r,c).
// - Prevent forming a fully-filled 2x2 square.
// - Prevent making any 3x3 block too dense (cap 5 occupied inside 3x3).
function safeToPlace(r,c){
  // if already occupied, disallow
  if (isOccupied(r,c)) return false;

  // 2x2 check: for each 2x2 square that would include (r,c),
  // ensure it won't become fully occupied after placing.
  const offsets2 = [[0,0],[-1,0],[0,-1],[-1,-1]];
  for(const [dr,dc] of offsets2){
    const sr = r + dr;
    const sc = c + dc;
    // square corners: (sr,sc),(sr+1,sc),(sr,sc+1),(sr+1,sc+1)
    if (sr < 0 || sc < 0 || sr+1 >= ROWS || sc+1 >= COLS) continue;
    let filled = 1; // count new cell
    if (isOccupied(sr,sc)) filled++;
    if (isOccupied(sr+1,sc)) filled++;
    if (isOccupied(sr,sc+1)) filled++;
    if (isOccupied(sr+1,sc+1)) filled++;
    if (filled >= 4) return false; // would create 2x2 block
  }

  // 3x3 density check: if any 3x3 window including (r,c) would have >5 occupied (after placement)
  for(let rr = r-2; rr <= r; rr++){
    for(let cc = c-2; cc <= c; cc++){
      const r0 = rr, c0 = cc, r1 = rr+2, c1 = cc+2;
      if (r0 < 0 || c0 < 0 || r1 >= ROWS || c1 >= COLS) continue;
      const current = countOccupiedRect(r0,c0,r1,c1);
      // after placing, it becomes current+1
      if (current + 1 > 5) return false;
    }
  }

  return true;
}

// Add cell to path and occupied set
function pushCell(r,c){
  path.push({r,c});
  occupiedSet.add(keyFor(r,c));
}

// ---------- Path generator (robust) ----------
function generatePath(rows, cols){
  ROWS = rows; COLS = cols;
  path = [];
  occupiedSet = new Set();

  let r = ROWS - 1;
  let c = Math.floor(COLS/2);
  pushCell(r,c);

  // configuration
  let segment = 'vertical'; // 'vertical' or 'horizontal'
  let lastDir = 0; // -1 left, +1 right
  let horizontalCount = 0; // count horizontal steps since last vertical

  // safety loop limit (never infinite)
  let overallAttempts = 0;
  const MAX_OVERALL_ATTEMPTS = 10000;

  while (r > 0 && overallAttempts < MAX_OVERALL_ATTEMPTS){
    overallAttempts++;

    if (segment === 'vertical'){
      // choose vertical length 1..3
      let vSteps = Math.floor(Math.random()*3) + 1;
      // try to place up to vSteps times; if some up cell unsafe, stop early and continue
      let placedUp = 0;
      for(let i=0;i<vSteps && r>0;i++){
        const nr = r - 1;
        const nc = c;
        if (safeToPlace(nr,nc)){
          r = nr;
          pushCell(r,c);
          placedUp++;
        } else {
          // can't place that upward cell (would violate blocks). Attempt to try 1-step up ignoring safety once?
          // Instead prefer to stop vertical here to attempt horizontal or small adjustments.
          break;
        }
      }
      // after vertical attempt, switch to horizontal if we moved at least one up.
      // if we couldn't place any up (rare), try a fallback: find any safe upward cell within one lateral shift
      if (placedUp === 0){
        // attempt tiny lateral adjustments to allow upward step
        let fallback = false;
        const tries = [{dc:0},{dc:-1},{dc:1}];
        for(const t of tries){
          const tc = clamp(c + (t.dc||0),0,COLS-1);
          const tr = r - 1;
          if (tr >= 0 && safeToPlace(tr,tc)){
            // place a lateral move first if needed
            if (tc !== c && safeToPlace(r,tc)){
              c = tc;
              pushCell(r,c);
            }
            r = tr;
            pushCell(r,c);
            fallback = true;
            break;
          }
        }
        if (!fallback){
          // as absolute last resort, force an upward placement ignoring near-occupied (should be rare)
          if (r > 0 && !isOccupied(r-1,c)){
            r = r-1;
            pushCell(r,c);
          } else {
            // if forced placement impossible, break to avoid infinite loop
            break;
          }
        }
      }

      // after vertical, reset horizontal counter and switch segment
      horizontalCount = 0;
      segment = 'horizontal';
    } else {
      // ---------- horizontal segment ----------
      // pick direction: prefer continuing lastDir, else random
      let dir;
      if (lastDir === 0) dir = Math.random() < 0.5 ? -1 : 1;
      else dir = Math.random() < 0.7 ? lastDir : -lastDir;

      // choose hSteps 1..2 but we will try alternatives if blocked
      let hDesired = Math.floor(Math.random()*2) + 1;
      let moved = 0;
      let attemptCount = 0;

      // try to perform horizontal steps, but make safe checks:
      while (attemptCount < 4 && moved < hDesired){
        attemptCount++;
        const nc = c + dir;
        if (nc < 0 || nc >= COLS){
          // switch direction and try
          dir = -dir;
          continue;
        }
        if (safeToPlace(r, nc)){
          c = nc;
          pushCell(r,c);
          moved++;
        } else {
          // try opposite direction for this step
          const opp = -dir;
          const nc2 = c + opp;
          if (nc2 >= 0 && nc2 < COLS && safeToPlace(r, nc2)){
            dir = opp;
            c = nc2;
            pushCell(r,c);
            moved++;
          } else {
            // cannot safely place horizontal step here; break and allow vertical next
            break;
          }
        }
      }

      horizontalCount += moved;

      // if moved >=2 then enforce rule: go up 1 (if safe), otherwise attempt fallback up lateral
      if (horizontalCount >= 2 && r > 0){
        const upR = r - 1;
        if (safeToPlace(upR,c)){
          r = upR;
          pushCell(r,c);
        } else {
          // try tiny lateral shift then up
          let done = false;
          for (const tryDir of [ -1, 1 ]) {
            const tc = clamp(c + tryDir, 0, COLS-1);
            if (!isOccupied(r,tc) && safeToPlace(r,tc) && safeToPlace(r-1,tc)){
              // move lateral then up
              c = tc;
              pushCell(r,c);
              r = r - 1;
              pushCell(r,c);
              done = true;
              break;
            }
          }
          if (!done){
            // if we couldn't place up safely, we will just switch to vertical and let vertical logic handle it
          }
        }
        horizontalCount = 0;
      }

      // set lastDir if we moved
      if (moved > 0) lastDir = dir;
      segment = 'vertical';
    }

  } // end while

  // final clean-up: ensure top reached. If not, try force upward placements until r==0 if possible
  let attempts = 0;
  while (path.length && path[path.length-1].r > 0 && attempts < 1000){
    attempts++;
    const last = path[path.length-1];
    const nr = last.r - 1;
    if (nr >= 0 && safeToPlace(nr, last.c)){
      pushCell(nr, last.c);
    } else {
      // attempt small lateral shift then up
      if (last.c > 0 && safeToPlace(last.r, last.c - 1) && safeToPlace(last.r - 1, last.c - 1)){
        pushCell(last.r, last.c - 1);
        pushCell(last.r - 1, last.c - 1);
      } else if (last.c < COLS - 1 && safeToPlace(last.r, last.c + 1) && safeToPlace(last.r - 1, last.c + 1)){
        pushCell(last.r, last.c + 1);
        pushCell(last.r - 1, last.c + 1);
      } else {
        break;
      }
    }
  }

  // dedupe & return
  const seen = new Set();
  const unique = [];
  for (const pos of path){
    const k = keyFor(pos.r,pos.c);
    if (!seen.has(k)){
      seen.add(k);
      unique.push(pos);
    }
  }
  return unique;
}

// Cache cell elements for better performance
const cellCache = new Map();

function getCell(r, c) {
  const key = `${r}_${c}`;
  if (!cellCache.has(key)) {
    const el = board.querySelector(`.cell[data-r='${r}'][data-c='${c}']`);
    if (el) cellCache.set(key, el);
  }
  return cellCache.get(key);
}

// ---------- Board rendering ----------
function buildBoard(rows, cols){
  board.style.gridTemplateColumns = `repeat(${cols}, var(--cell-size))`;
  board.style.gridTemplateRows = `repeat(${rows}, var(--cell-size)) auto`;
  
  // Clear cache when rebuilding
  cellCache.clear();
  
  // Use document fragment for better performance
  const fragment = document.createDocumentFragment();
  for (let r=0; r<rows; r++){
    for (let c=0; c<cols; c++){
      const el = document.createElement('div');
      el.className = 'cell';
      el.dataset.r = r; 
      el.dataset.c = c;
      fragment.appendChild(el);
    }
  }
  board.innerHTML = '';
  board.appendChild(fragment);
  
  // Add timer bar as last element in grid
  const timerWrap = document.getElementById('timer-wrap');
  if (!timerWrap) {
    const timerContainer = document.createElement('div');
    timerContainer.id = 'timer-wrap';
    timerContainer.className = 'timer-bar-grid-item';
    timerContainer.innerHTML = '<div class="timer-bar-wrapper"><div id="timer-bar" class="timer-bar"></div></div>';
    board.appendChild(timerContainer);
    timerBar = document.getElementById('timer-bar');
  } else {
    if (!board.contains(timerWrap)) {
      board.appendChild(timerWrap);
    }
    timerBar = document.getElementById('timer-bar');
  }
}

function paintAll(){
  // Batch DOM updates for better performance
  const cells = board.querySelectorAll('.cell');
  
  // Clear all cells
  cells.forEach(el => {
    el.classList.remove('path','player','start');
    const oldArrow = el.querySelector('.player-direction');
    if (oldArrow) oldArrow.remove();
  });
  
  // Paint path
  for (let i=0; i<path.length; i++){
    const p = path[i];
    const el = getCell(p.r, p.c);
    if (el) {
      el.classList.add('path');
      if (i===0) el.classList.add('start');
    }
  }
  
  // Paint player
  if (player){
    const pel = getCell(player.r, player.c);
    if (pel) {
      pel.classList.add('player');
      const playerIdx = path.findIndex(p => p.r === player.r && p.c === player.c);
      if (playerIdx >= 0 && playerIdx < path.length - 1){
        const nextPos = path[playerIdx + 1];
        const dr = nextPos.r - player.r;
        const dc = nextPos.c - player.c;
        let arrow = '→';
        if (dr < 0) arrow = '↑';
        else if (dr > 0) arrow = '↓';
        else if (dc < 0) arrow = '←';
        else if (dc > 0) arrow = '→';
        const dirEl = document.createElement('div');
        dirEl.className = 'player-direction';
        dirEl.textContent = arrow;
        pel.appendChild(dirEl);
      }
    }
  }
}

// ---------- Timer ----------
function startTimer(seconds){
  stopTimer();
  // Ensure timer bar reference is up to date
  if (!timerBar) {
    timerBar = document.getElementById('timer-bar');
  }
  if (!timerBar) return; // Safety check
  
  timeLeft = seconds;
  const totalSeconds = seconds;
  timerBar.style.width = '100%';
  timerBar.classList.remove('critical');
  let isCritical = false;
  
  timerInterval = setInterval(()=>{
    timeLeft -= 0.1;
    if (timeLeft < 0) timeLeft = 0;
    
    // Smooth calculation - bar follows timing smoothly until end
    const percent = (timeLeft / totalSeconds) * 100;
    timerBar.style.width = Math.max(0, percent) + '%';
    
    // Add critical styling in last 2 seconds (optimized)
    if (timeLeft <= 2 && timeLeft > 0 && !isCritical) {
      timerBar.classList.add('critical');
      isCritical = true;
    } else if (timeLeft > 2 && isCritical) {
      timerBar.classList.remove('critical');
      isCritical = false;
    }
    
    if (timeLeft <= 0){
      stopTimer();
      endGame(false, 'Time is up!');
    }
  },100);
}
function stopTimer(){
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

// ---------- Game flow ----------
function startGame(size, variant){
  acceptingInput = false;
  let difficultyText = '';
  if (size === 20){ ROWS = 20; COLS = 20; totalTime = 9; difficultyText = 'NORMAL'; } 
  else if (size === 30) { ROWS = 30; COLS = 30; totalTime = 13; difficultyText = 'HARD'; }
  else if (size === 40) { ROWS = 40; COLS = 40; totalTime = 17; difficultyText = 'EXTREME'; }
  else if (size === 50) {
    ROWS = 50; COLS = 50;
    if (variant === 'INSANE') { totalTime = 21; difficultyText = 'INSANE'; }
    else if (variant === 'ULTRA') { totalTime = 20; difficultyText = 'ULTRA EXTREME'; }
    else { totalTime = 21; difficultyText = 'INSANE'; }
  }

  // Set difficulty badge
  const badge = document.getElementById('difficulty-badge');
  if (badge) {
    badge.textContent = difficultyText;
    badge.setAttribute('data-difficulty', difficultyText);
  }

  // Compute responsive cell size so large grids (40x40 / 50x50) fit on common screens (e.g., 1920×1080)
  // Leave room for UI (msg/timer). Use available viewport area heuristics.
  // For harder difficulties, use more screen space and larger cells
  const isHardDifficulty = size >= 40;
  const isExtremeOrHigher = size >= 40; // Extreme, Insane, Ultra Extreme
  
  // Use more screen space for extreme difficulties
  const widthMultiplier = isExtremeOrHigher ? 0.92 : (isHardDifficulty ? 0.85 : 0.74);
  const heightMultiplier = isExtremeOrHigher ? 0.82 : (isHardDifficulty ? 0.75 : 0.66);
  const maxWidth = isExtremeOrHigher ? 2000 : (isHardDifficulty ? 1800 : 1600);
  const maxHeight = isExtremeOrHigher ? 1400 : (isHardDifficulty ? 1200 : 1100);
  
  const availWidth = Math.min(window.innerWidth * widthMultiplier, maxWidth);
  const availHeight = Math.min(window.innerHeight * heightMultiplier, maxHeight);
  const reservedW = 24; // board padding + small margins
  const reservedH = isHardDifficulty ? 180 : 160; // header, message, timer area
  let computedCell = Math.floor(Math.min((availWidth - reservedW) / COLS, (availHeight - reservedH) / ROWS));
  
  // Clamp cell size to reasonable bounds - larger cells for extreme difficulties
  const minCell = isExtremeOrHigher ? 14 : (isHardDifficulty ? 12 : 8);
  const maxCell = isExtremeOrHigher ? 42 : (isHardDifficulty ? 40 : 32);
  computedCell = Math.max(minCell, Math.min(maxCell, computedCell));
  
  // For extreme difficulties, ensure minimum visibility by boosting cell size if too small
  if (isExtremeOrHigher && computedCell < 16) {
    computedCell = Math.max(16, computedCell);
  }
  
  // For hard difficulty only, boost cell size slightly
  if (isHardDifficulty && !isExtremeOrHigher && computedCell < 14) {
    computedCell = Math.max(14, computedCell);
  }
  
  document.documentElement.style.setProperty('--cell-size', computedCell + 'px');
  if (board) {
    // Adjust gap based on cell size - larger gaps for extreme difficulties
    if (isExtremeOrHigher) {
      board.style.gap = (computedCell >= 20 ? '4px' : (computedCell >= 16 ? '3px' : '2px'));
    } else {
      board.style.gap = (computedCell >= 18 ? '3px' : '1px');
    }
    // Add class for hard difficulties
    if (isHardDifficulty) {
      board.parentElement.classList.add('hard-difficulty-board');
    } else {
      board.parentElement.classList.remove('hard-difficulty-board');
    }
  }

  buildBoard(ROWS, COLS);
  path = generatePath(ROWS, COLS);

  // ensure we have at least 1 element
  if (!path || path.length === 0){
    // fallback simple straight path
    path = [];
    let r = ROWS - 1; 
    let c = Math.floor(COLS/2);
    while (r >= 0){ path.push({r,c}); r--; }
  }

  // create occupiedSet from path
  occupiedSet = new Set(path.map(p => keyFor(p.r, p.c)));

  // place player at first path cell (bottom)
  player = { r: path[0].r, c: path[0].c };
  paintAll();

  startScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');

  // Show start instruction centered for 5 seconds, then begin timer and accept input
  msg.textContent = 'Follow the path to the top';
  msg.className = 'game-message instruction';
  acceptingInput = false;
  setTimeout(() => {
    // clear the message (keep it briefly empty) and start
    msg.textContent = '';
    msg.className = '';
    startTimer(totalTime);
    acceptingInput = true;
  }, 5000);
}


function endGame(success, text){
  acceptingInput = false;
  stopTimer();

  // Use clearer end messages with proper classes for styling
  if (success) {
    msg.innerHTML = '<span class="logo">✅</span> SUCCESSFUL!';
    msg.className = 'game-message hack-success';
    msg.style.display = 'block';
    msg.style.opacity = '1';
  } else {
    msg.innerHTML = '<span class="logo">❌</span> HACK FAILED';
    msg.className = 'game-message hack-failed';
    msg.style.display = 'block';
    msg.style.opacity = '1';
  }

  // Add small glitch/flicker at the end
  if (timerBar) timerBar.classList.remove('flicker');

  // Always show end message for 5 seconds before returning to menu
  const waitTime = 5000;
  setTimeout(() => {
    msg.className = '';
    msg.style.opacity = '0';
    msg.style.display = 'none';
    gameScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
  }, waitTime);
}

function restartSame(){
  if (!startScreen.classList.contains('hidden')){
    return;
  }
  stopTimer();
  buildBoard(ROWS, COLS);
  path = generatePath(ROWS, COLS);
  occupiedSet = new Set(path.map(p => keyFor(p.r, p.c)));
  player = { r: path[0].r, c: path[0].c };
  paintAll();

  // Show instruction for 5s before resuming
  msg.textContent = 'Follow the path to the top';
  msg.className = 'game-message instruction';
  acceptingInput = false;
  setTimeout(() => {
    msg.textContent = '';
    msg.className = '';
    startTimer(totalTime);
    acceptingInput = true;
  }, 5000);
}


// ---------- Input handling ----------
function onKey(e) {
  if (!acceptingInput) return;
  const k = e.key.toLowerCase();
  const keyCode = e.key;
  
  // Support both WASD and Arrow keys
  const map = { 
    'w': [-1, 0], 's': [1, 0], 'a': [0, -1], 'd': [0, 1],
    'arrowup': [-1, 0], 'arrowdown': [1, 0], 'arrowleft': [0, -1], 'arrowright': [0, 1]
  };
  const arrowMap = { 
    'w': '↑', 's': '↓', 'a': '←', 'd': '→',
    'arrowup': '↑', 'arrowdown': '↓', 'arrowleft': '←', 'arrowright': '→'
  };
  
  // Get the key identifier for visual feedback
  let keyId = null;
  if (k === 'w') keyId = 'key-w';
  else if (k === 'a') keyId = 'key-a';
  else if (k === 's') keyId = 'key-s';
  else if (k === 'd') keyId = 'key-d';
  else if (keyCode === 'ArrowUp') keyId = 'key-arrow-up';
  else if (keyCode === 'ArrowLeft') keyId = 'key-arrow-left';
  else if (keyCode === 'ArrowDown') keyId = 'key-arrow-down';
  else if (keyCode === 'ArrowRight') keyId = 'key-arrow-right';
  
  // Normalize key for movement
  const normalizedKey = k === 'arrowup' || keyCode === 'ArrowUp' ? 'w' :
                        k === 'arrowdown' || keyCode === 'ArrowDown' ? 's' :
                        k === 'arrowleft' || keyCode === 'ArrowLeft' ? 'a' :
                        k === 'arrowright' || keyCode === 'ArrowRight' ? 'd' : k;
  
  if (!map[normalizedKey] && !map[k]) return;
  
  // Show visual feedback
  if (keyId) {
    const keyEl = document.getElementById(keyId);
    if (keyEl) {
      keyEl.classList.add('pressed');
      setTimeout(() => keyEl.classList.remove('pressed'), 150);
    }
  }
  
  const moveKey = map[normalizedKey] || map[k];
  if (!moveKey) return;

  const [dr, dc] = moveKey;
  const nr = player.r + dr;
  const nc = player.c + dc;

  if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) return;

  // Optimize path check using occupiedSet
  const onPath = isOccupied(nr, nc);

  if (!onPath) {
    timeLeft = Math.max(0, timeLeft - 1);

    // Target wrong cell (where player tried to move)
    const wrongCell = board.querySelector(`.cell[data-r='${nr}'][data-c='${nc}']`);
    if (wrongCell) {
      const arrow = document.createElement('div');
      arrow.className = 'wrong-arrow';
      arrow.textContent = arrowMap[normalizedKey] || arrowMap[k] || '×';
      wrongCell.appendChild(arrow);
      setTimeout(() => arrow.remove(), 600);
    }

    msg.textContent = '⚠️ Wrong move!';
    msg.className = 'game-message';
    setTimeout(() => {
      msg.textContent = 'Follow the path to the top';
      msg.className = 'game-message instruction';
    }, 800);

    if (timeLeft <= 0) endGame(false, 'Out of time (penalty)');
    return;
  }

  // ✅ Move normally
  player.r = nr;
  player.c = nc;
  paintAll();

  if (player.r === 0) endGame(true, '💻 Hack successful');
}



// ---------- Wiring ----------
// Start screen buttons
normalBtnStart.addEventListener('click', ()=> startGame(20));
hardBtnStart.addEventListener('click', ()=> startGame(30));
extremeBtnStart.addEventListener('click', ()=> startGame(40));
insaneBtnStart.addEventListener('click', ()=> startGame(50, 'INSANE'));
ultraBtnStart.addEventListener('click', ()=> startGame(50, 'ULTRA'));

// Game screen buttons
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');

if (restartBtn) {
  restartBtn.addEventListener('click', restartSame);
}

if (backBtn) {
  backBtn.addEventListener('click', () => {
    stopTimer();
    gameScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
  });
}

document.addEventListener('keydown', onKey);