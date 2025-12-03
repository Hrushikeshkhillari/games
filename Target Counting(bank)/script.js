class BlinkChallengeGame {
    constructor() {
        this.gridSize = 8;
        this.totalCells = 64;
        this.targetCount = 11; // Total target letters to find per character
        this.grid = [];
        this.targetChar = null;
        this.currentTargetPosition = null; // Only ONE target position at a time
        this.remainingTargets = 11; // How many targets left for current character
        this.foundCount = 0; // Found for current character
        this.totalFound = 0; // Total found across all characters
        this.score = 0;
        this.isPlaying = false;
        this.shuffleInterval = null;
        this.letterTimer = 5; // 5 seconds per target
        this.letterTimerInterval = null;
        this.usedTargets = []; // Track which characters have been used as targets
        
        this.initializeElements();
        this.setupEventListeners();
    }
    
    initializeElements() {
        this.gridElement = document.getElementById('game-grid');
        this.targetCharElement = document.getElementById('target-char');
        this.timerBar = document.getElementById('timer-bar');
        this.startBtn = document.getElementById('start-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.overlay = document.getElementById('game-overlay');
        this.overlayTitle = document.getElementById('overlay-title');
        this.overlayMessage = document.getElementById('overlay-message');
        this.playAgainBtn = document.getElementById('play-again-btn');
    }
    
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.playAgainBtn.addEventListener('click', () => this.resetGame());
    }
    
    generateRandomChar(excludeChar = null) {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let char = chars[Math.floor(Math.random() * chars.length)];
        if (excludeChar === null) {
            return char;
        }
        while (char === excludeChar) {
            char = chars[Math.floor(Math.random() * chars.length)];
        }
        return char;
    }
    
    generateRandomTargetChar() {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        // Filter out already used targets
        const availableChars = chars.split('').filter(char => !this.usedTargets.includes(char));
        
        // If all characters have been used, reset the used list
        if (availableChars.length === 0) {
            this.usedTargets = [];
            return chars[Math.floor(Math.random() * chars.length)];
        }
        
        const selectedChar = availableChars[Math.floor(Math.random() * availableChars.length)];
        this.usedTargets.push(selectedChar);
        return selectedChar;
    }
    
    generateGrid() {
        // Generate all characters for the grid (no target character yet)
        const allChars = [];
        for (let i = 0; i < this.totalCells; i++) {
            allChars.push(this.generateRandomChar());
        }
        
        // Store grid data
        this.grid = allChars;
        
        // Render grid
        this.renderGrid();
    }
    
    startNewTargetCharacter() {
        // Select a random target character (avoiding duplicates)
        this.targetChar = this.generateRandomTargetChar();
        this.targetCharElement.textContent = this.targetChar.toUpperCase();
        this.remainingTargets = 11;
        this.foundCount = 0;
        
        // Ensure no other cells currently show the target character
        this.ensureNoOtherTargets();
        
        // Place the FIRST target character in a random position
        this.placeNextTarget();
        
        // Start the 4-second timer
        this.startLetterTimer();
    }
    
    ensureNoOtherTargets() {
        // Remove target character from ALL cells first
        for (let i = 0; i < this.totalCells; i++) {
            if (this.grid[i] === this.targetChar) {
                this.grid[i] = this.generateRandomChar(this.targetChar);
                this.updateCellDisplay(i);
            }
        }
        // Reset target position
        this.currentTargetPosition = null;
    }
    
    placeNextTarget() {
        // First, ensure NO target characters exist anywhere
        this.ensureNoOtherTargets();
        
        // Find all available positions (all positions are available since we cleared everything)
        const availablePositions = [];
        for (let i = 0; i < this.totalCells; i++) {
            if (this.grid[i] !== this.targetChar) {
                availablePositions.push(i);
            }
        }
        
        if (availablePositions.length === 0) {
            // Fallback: use any position
            this.currentTargetPosition = Math.floor(Math.random() * this.totalCells);
        } else {
            // Pick a random available position
            this.currentTargetPosition = availablePositions[Math.floor(Math.random() * availablePositions.length)];
        }
        
        // Place target character at this position ONLY
        this.grid[this.currentTargetPosition] = this.targetChar;
        
        // Update display
        this.updateCellDisplay(this.currentTargetPosition);
        
        // Verify only one target exists
        this.verifySingleTarget();
    }
    
    verifySingleTarget() {
        let targetCount = 0;
        let foundPosition = null;
        
        for (let i = 0; i < this.totalCells; i++) {
            if (this.grid[i] === this.targetChar) {
                targetCount++;
                foundPosition = i;
            }
        }
        
        // If more than one target found, fix it
        if (targetCount > 1) {
            for (let i = 0; i < this.totalCells; i++) {
                if (this.grid[i] === this.targetChar && i !== this.currentTargetPosition) {
                    this.grid[i] = this.generateRandomChar(this.targetChar);
                    this.updateCellDisplay(i);
                }
            }
        }
        
        // If no target found but we should have one, place it
        if (targetCount === 0 && this.currentTargetPosition !== null) {
            this.grid[this.currentTargetPosition] = this.targetChar;
            this.updateCellDisplay(this.currentTargetPosition);
        }
    }
    
    
    startLetterTimer() {
        // Clear any existing timer
        if (this.letterTimerInterval) {
            clearInterval(this.letterTimerInterval);
        }
        
        this.letterTimer = 5; // Reset to 5 seconds
        this.updateProgressBars(100); // Start at 100%
        
        this.letterTimerInterval = setInterval(() => {
            if (!this.isPlaying) return;
            
            this.letterTimer -= 0.1; // Decrease by 0.1 seconds
            
            // Update progress bars
            const percentage = (this.letterTimer / 5) * 100;
            this.updateProgressBars(percentage);
            
            if (this.letterTimer <= 0) {
                // Time's up - game failed
                this.endGame(false, 'Time ran out! You failed to find the character in 5 seconds.');
            }
        }, 100); // Update every 100ms for smooth animation
    }
    
    updateProgressBars(percentage) {
        if (this.timerBar) {
            this.timerBar.style.width = `${Math.max(0, percentage)}%`;
        }
    }
    
    renderGrid() {
        this.gridElement.innerHTML = '';
        
        for (let i = 0; i < this.totalCells; i++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.textContent = this.grid[i].toUpperCase();
            cell.dataset.index = i;
            
            // Mark target cell if this is the current target position
            if (i === this.currentTargetPosition) {
                cell.classList.add('target');
            } else {
                // All non-target cells should blink
                cell.classList.add('blinking');
            }
            
            // Add click handler
            cell.addEventListener('click', () => this.handleCellClick(i));
            
            // Add hover effect
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('hovered');
            });
            cell.addEventListener('mouseleave', () => {
                cell.classList.remove('hovered');
            });
            
            this.gridElement.appendChild(cell);
        }
    }
    
    updateCellDisplay(index) {
        const cell = this.gridElement.querySelector(`[data-index="${index}"]`);
        if (!cell) return;
        
        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
            cell.textContent = this.grid[index].toUpperCase();
            
            // Update target class
            if (index === this.currentTargetPosition) {
                cell.classList.add('target');
                cell.classList.remove('blinking');
                cell.classList.remove('shuffling');
            } else {
                cell.classList.remove('target');
                if (!cell.classList.contains('shuffling')) {
                    cell.classList.add('blinking');
                }
            }
        });
    }
    
    startGame() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.startBtn.disabled = true;
        this.foundCount = 0;
        this.totalFound = 0;
        this.score = 0;
        this.usedTargets = [];
        this.currentTargetPosition = null;
        
        // Generate initial grid
        this.generateGrid();
        
        // Start first target character
        this.startNewTargetCharacter();
        
        // Start shuffling
        this.startShuffling();
    }
    
    
    startShuffling() {
        this.shuffleInterval = setInterval(() => {
            if (!this.isPlaying) return;
            
            this.shuffleGrid();
        }, 800); // Shuffle every 0.8 seconds (faster)
    }
    
    shuffleGrid() {
        // Collect all indices that can be shuffled (exclude current target cell)
        const availableIndices = [];
        for (let i = 0; i < this.totalCells; i++) {
            if (i === this.currentTargetPosition) {
                continue;
            }
            
            // Replace any accidental duplicate of the target immediately
            if (this.grid[i] === this.targetChar) {
                this.grid[i] = this.generateRandomChar(this.targetChar);
                this.updateCellDisplay(i);
            }
            
            availableIndices.push(i);
        }
        
        if (availableIndices.length === 0) {
            return;
        }
        
        const shuffleCount = Math.max(
            1,
            Math.floor(Math.random() * availableIndices.length) + 1
        );
        
        // Randomize the available indices and take the number we need
        const shuffled = [...availableIndices];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        const indicesToShuffle = shuffled.slice(0, shuffleCount);
        
        // Shuffle cells with smooth animation
        indicesToShuffle.forEach((index, i) => {
            const cell = this.gridElement.querySelector(`[data-index="${index}"]`);
            if (!cell || index === this.currentTargetPosition) return;
            
            // Stagger the animations for smoother effect
            setTimeout(() => {
                cell.classList.add('shuffling');
                
                // Change character mid-animation
                setTimeout(() => {
                    const newChar = this.generateRandomChar(this.targetChar);
                    this.grid[index] = newChar;
                    cell.textContent = newChar.toUpperCase();
                    
                    // Remove shuffling class after animation
                    setTimeout(() => {
                        cell.classList.remove('shuffling');
                        if (index !== this.currentTargetPosition) {
                            cell.classList.add('blinking');
                        }
                    }, 600);
                }, 300);
            }, i * 50); // Smaller delay for smoother effect
        });
        
        // Ensure target cell never blinks during shuffle and verify only one target exists
        if (this.currentTargetPosition !== null) {
            const targetCell = this.gridElement.querySelector(`[data-index="${this.currentTargetPosition}"]`);
            if (targetCell) {
                targetCell.classList.add('target');
                targetCell.classList.remove('blinking');
                targetCell.classList.remove('shuffling');
            }
            
            // Verify only one target exists after shuffle
            this.verifySingleTarget();
        }
    }
    
    
    handleCellClick(index) {
        if (!this.isPlaying) return;
        
        const cell = this.gridElement.querySelector(`[data-index="${index}"]`);
        if (!cell) return;
        
        // Check if it's the current target cell
        if (index === this.currentTargetPosition) {
            // Correct selection!
            this.foundCount++;
            this.totalFound++;
            this.remainingTargets--;
            
            // Clear the timer
            if (this.letterTimerInterval) {
                clearInterval(this.letterTimerInterval);
                this.letterTimerInterval = null;
            }
            
            // Remove target character and replace with random
            this.grid[index] = this.generateRandomChar(this.targetChar);
            this.updateCellDisplay(index);
            
            // Clear current target position
            this.currentTargetPosition = null;
            
            // Check if we found all 11 for this character
            if (this.remainingTargets <= 0) {
                // Move to next character
                setTimeout(() => {
                    this.startNewTargetCharacter();
                }, 300);
            } else {
                // Place next target instantly (this will ensure only one exists)
                this.placeNextTarget();
                
                // Restart 5-second timer
                this.startLetterTimer();
            }
        } else {
            // Wrong selection - game over
            this.endGame(false, 'Wrong character selected! Game Over.');
        }
    }
    
    
    endGame(won, message = '') {
        this.isPlaying = false;
        
        // Clear all intervals
        if (this.shuffleInterval) {
            clearInterval(this.shuffleInterval);
            this.shuffleInterval = null;
        }
        if (this.letterTimerInterval) {
            clearInterval(this.letterTimerInterval);
            this.letterTimerInterval = null;
        }
        
        // Show overlay
        if (won) {
            this.overlayTitle.textContent = 'You Win!';
            this.overlayMessage.textContent = `Congratulations! You completed the challenge!\nTotal Characters Found: ${this.totalFound}`;
        } else {
            this.overlayTitle.textContent = 'Game Over!';
            this.overlayMessage.textContent = message || `Time ran out!\nTotal Characters Found: ${this.totalFound}`;
        }
        
        this.overlay.classList.remove('hidden');
        this.startBtn.disabled = false;
    }
    
    resetGame() {
        this.isPlaying = false;
        
        // Clear all intervals
        if (this.shuffleInterval) {
            clearInterval(this.shuffleInterval);
            this.shuffleInterval = null;
        }
        if (this.letterTimerInterval) {
            clearInterval(this.letterTimerInterval);
            this.letterTimerInterval = null;
        }
        
        // Reset UI
        this.overlay.classList.add('hidden');
        this.gridElement.innerHTML = '';
        this.score = 0;
        this.foundCount = 0;
        this.totalFound = 0;
        this.targetChar = null;
        this.currentTargetPosition = null;
        this.remainingTargets = 11;
        this.usedTargets = [];
        this.letterTimer = 5;
        this.targetCharElement.textContent = '-';
        if (this.timerBar) {
            this.timerBar.style.width = '0%';
        }
        this.startBtn.disabled = false;
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new BlinkChallengeGame();
});

