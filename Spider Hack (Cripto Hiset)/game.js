// Game Engine for Spider Web Logic Puzzle

class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        if (!this.canvas) {
            throw new Error('Canvas element not found!');
        }
        
        this.ctx = this.canvas.getContext('2d');
        if (!this.ctx) {
            throw new Error('Could not get 2D context from canvas!');
        }
        
        this.resizeCanvas();
        
        this.gameState = 'menu'; // menu, countdown, playing, win, fail
        this.countdownTime = 3;
        this.gameTime = 40; // seconds
        this.timeRemaining = 40;
        this.endScreenHold = 3;
        this.endScreenTimer = 0;
        
        this.difficulty = null; // 'easy', 'medium', 'hard'
        this.numPoints = 6; // Will be set based on difficulty
        this.countdownInterval = null;
        this.gameLoopRunning = false;
        
        this.points = [];
        this.lines = [];
        this.selectedPoint = null;
        this.isDragging = false;
        this.hasMovedPoint = false;
        this.originalMousePos = null;
        this.mousePos = { x: 0, y: 0 };
        
        this.particleSystem = [];
        this.lastFrameTime = 0;
        
        // Puzzle rectangle
        this.rectX = 0;
        this.rectY = 0;
        this.rectWidth = 0;
        this.rectHeight = 0;
        this.margin = 50;
        
        this.init();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Recalculate puzzle positions if points exist (but don't recreate)
        if (this.points.length > 0) {
            // Recalculate rectangle dimensions
            const canvasWidth = this.canvas.width;
            const canvasHeight = this.canvas.height;
            
            this.rectWidth = Math.min(canvasWidth * 0.7, 800);
            this.rectHeight = Math.min(canvasHeight * 0.7, 600);
            this.rectX = (canvasWidth - this.rectWidth) / 2;
            this.rectY = (canvasHeight - this.rectHeight) / 2 + 50;
            
            // Update point positions proportionally
            const centerX = this.rectX + this.rectWidth / 2;
            const centerY = this.rectY + this.rectHeight / 2;
            const radius = Math.min(this.rectWidth, this.rectHeight) * 0.35;
            const numPoints = this.points.length;
            
            for (let i = 0; i < numPoints; i++) {
                const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                
                // Update positions while preserving original positions
                this.points[i].x = x;
                this.points[i].y = y;
                this.points[i].originalX = x;
                this.points[i].originalY = y;
            }
            
            // Recalculate line states
            this.updateLineStates();
        }
    }
    
    init() {
        console.log('=== GAME INIT STARTING ===');
        
        // Show difficulty menu
        const menu = document.getElementById('difficultyMenu');
        if (menu) {
            menu.classList.remove('hidden');
            console.log('Difficulty menu shown');
        } else {
            console.error('Difficulty menu element not found!');
        }
        
        // Setup difficulty button listeners - use a small delay to ensure DOM is ready
        setTimeout(() => {
            const easyBtn = document.getElementById('easyBtn');
            const mediumBtn = document.getElementById('mediumBtn');
            const hardBtn = document.getElementById('hardBtn');
            
            console.log('Setting up buttons:', { easyBtn: !!easyBtn, mediumBtn: !!mediumBtn, hardBtn: !!hardBtn });
            
            if (easyBtn) {
                easyBtn.onclick = () => {
                    console.log('Easy button clicked');
                    this.selectDifficulty('easy');
                };
            } else {
                console.error('Easy button not found!');
            }
            
            if (mediumBtn) {
                mediumBtn.onclick = () => {
                    console.log('Medium button clicked');
                    this.selectDifficulty('medium');
                };
            } else {
                console.error('Medium button not found!');
            }
            
            if (hardBtn) {
                hardBtn.onclick = () => {
                    console.log('Hard button clicked');
                    this.selectDifficulty('hard');
                };
            } else {
                console.error('Hard button not found!');
            }
        }, 100);
        
        // Setup event listeners
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Initial render
        this.render();
        
        // Start game loop immediately
        requestAnimationFrame((ts) => this.gameLoop(ts));
        console.log('Game initialized, waiting for difficulty selection. State:', this.gameState);
    }
    
    selectDifficulty(difficulty) {
        console.log('=== selectDifficulty called ===', difficulty);
        console.log('Current gameState:', this.gameState);
        
        // Prevent multiple clicks
        if (this.gameState !== 'menu') {
            console.log('Already selected difficulty, ignoring click. State:', this.gameState);
            return;
        }
        
        console.log('Setting difficulty to:', difficulty);
        this.difficulty = difficulty;
        
        // Set number of points based on difficulty
        // Easy: 4-5 points, Medium: 5-6 points, Hard: 6-8 points
        if (difficulty === 'easy') {
            this.numPoints = Math.floor(Math.random() * 2) + 4; // 4 or 5
        } else if (difficulty === 'medium') {
            this.numPoints = Math.floor(Math.random() * 2) + 5; // 5 or 6
        } else if (difficulty === 'hard') {
            this.numPoints = Math.floor(Math.random() * 3) + 6; // 6, 7, or 8
        }
        
        console.log(`Difficulty selected: ${difficulty}, Points: ${this.numPoints}`);
        
        // Hide menu immediately
        const menu = document.getElementById('difficultyMenu');
        if (menu) {
            menu.classList.add('hidden');
        }
        
        // Hide "Starting Spider..." text, show only countdown
        const startText = document.getElementById('startText');
        if (startText) {
            startText.style.display = 'none';
        }
        
        // Show countdown overlay
        const overlay = document.getElementById('startScreen');
        if (overlay) {
            overlay.classList.remove('hidden');
        }
        
        // Set initial countdown display
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.textContent = '3';
        }
        
        // Create puzzle layout with selected difficulty
        this.createPuzzleLayout();
        
        // Verify puzzle was created
        console.log('Puzzle created:', {
            points: this.points.length,
            lines: this.lines.length,
            rectX: this.rectX,
            rectY: this.rectY,
            rectWidth: this.rectWidth,
            rectHeight: this.rectHeight
        });
        
        if (this.points.length === 0) {
            console.error('ERROR: No points created!');
            alert('Error: Puzzle could not be created. Please refresh the page.');
            return;
        }
        
        // Start countdown
        console.log('Starting countdown...');
        this.gameState = 'countdown';
        this.countdownTime = 3;
        
        // Clear any existing interval
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
        
        // Force initial render
        this.render();
        
        // Primary countdown timer - use arrow function to preserve 'this'
        const self = this;
        
        // Clear any existing interval first
        if (self.countdownInterval) {
            clearInterval(self.countdownInterval);
            self.countdownInterval = null;
        }
        
        console.log('Starting countdown interval...');
        self.countdownInterval = setInterval(() => {
            if (self.gameState === 'countdown') {
                self.countdownTime -= 0.016;
                
                // Update display
                if (countdownEl) {
                    const displayTime = Math.ceil(self.countdownTime);
                    if (displayTime > 0) {
                        countdownEl.textContent = displayTime;
                    } else {
                        countdownEl.textContent = '';
                    }
                }
                
                // Transition to playing when countdown ends
                if (self.countdownTime <= 0) {
                    self.countdownTime = 0;
                    if (self.countdownInterval) {
                        clearInterval(self.countdownInterval);
                        self.countdownInterval = null;
                    }
                    
                    console.log('Countdown finished, starting game...');
                    
                    // Hide countdown overlay
                    if (overlay) {
                        overlay.classList.add('hidden');
                    }
                    
                    // Show timer bar
                    const timerContainer = document.getElementById('timerBarContainer');
                    if (timerContainer) {
                        timerContainer.style.display = 'block';
                    }
                    
                    // Start game
                    self.gameState = 'playing';
                    self.timeRemaining = self.gameTime;
                    console.log('=== GAME STARTED! === State:', self.gameState, 'Points:', self.points.length);
                }
            } else if (self.gameState !== 'countdown') {
                // Stop countdown if state changed
                console.log('Countdown stopped, state changed to:', self.gameState);
                if (self.countdownInterval) {
                    clearInterval(self.countdownInterval);
                    self.countdownInterval = null;
                }
            }
        }, 16); // ~60fps
        
        console.log('Countdown interval created, ID:', self.countdownInterval);
    }
    
    createPuzzleLayout() {
        // Clear existing points and lines
        this.points = [];
        this.lines = [];
        
        // Calculate rectangle dimensions - ensure canvas is valid
        const canvasWidth = this.canvas.width || window.innerWidth;
        const canvasHeight = this.canvas.height || window.innerHeight;
        
        if (canvasWidth === 0 || canvasHeight === 0) {
            console.error('Canvas dimensions are 0!', canvasWidth, canvasHeight);
            // Use default dimensions
            this.rectWidth = 800;
            this.rectHeight = 600;
            this.rectX = 100;
            this.rectY = 100;
        } else {
            this.rectWidth = Math.min(canvasWidth * 0.7, 800);
            this.rectHeight = Math.min(canvasHeight * 0.7, 600);
            this.rectX = (canvasWidth - this.rectWidth) / 2;
            this.rectY = (canvasHeight - this.rectHeight) / 2 + 50; // Offset for timer
        }
        
        // Use numPoints set by difficulty
        const numPoints = this.numPoints || 6;
        
        if (numPoints < 3) {
            console.error('Invalid number of points:', numPoints);
            return;
        }
        
        const centerX = this.rectX + this.rectWidth / 2;
        const centerY = this.rectY + this.rectHeight / 2;
        const radius = Math.min(this.rectWidth, this.rectHeight) * 0.35;
        
        // Create points in a web pattern
        for (let i = 0; i < numPoints; i++) {
            const angle = (Math.PI * 2 * i) / numPoints - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            this.points.push({
                x: x,
                y: y,
                originalX: x,
                originalY: y,
                isGreen: false, // Start with red points
                radius: 12
            });
        }
        
        // Create lines connecting points in a simpler pattern
        // Connect each point to 2-3 other points to create a solvable puzzle
        for (let i = 0; i < numPoints; i++) {
            // Connect to next point (creates outer ring)
            this.lines.push({
                from: i,
                to: (i + 1) % numPoints,
                isGreen: false
            });
            
            // Connect to point 2 ahead (creates inner web with overlaps)
            if (i < numPoints - 2) {
                this.lines.push({
                    from: i,
                    to: (i + 2) % numPoints,
                    isGreen: false
                });
            }
        }
        
        // Initialize all as red (will be calculated based on overlaps)
        this.updateLineStates();
        
        console.log('Puzzle layout created:', {
            points: this.points.length,
            lines: this.lines.length,
            rect: { x: this.rectX, y: this.rectY, w: this.rectWidth, h: this.rectHeight }
        });
    }
    
    updateLineStates() {
        // First, reset all lines to green (assuming no overlaps)
        for (let line of this.lines) {
            line.isGreen = true;
        }
        
        // Check for line overlaps - if ANY line overlaps another, BOTH become RED
        for (let i = 0; i < this.lines.length; i++) {
            const line = this.lines[i];
            const p1 = this.points[line.from];
            const p2 = this.points[line.to];
            
            // Check if this line overlaps with any other line
            for (let j = i + 1; j < this.lines.length; j++) {
                const otherLine = this.lines[j];
                const p3 = this.points[otherLine.from];
                const p4 = this.points[otherLine.to];
                
                // If lines intersect (overlap), mark BOTH as red
                if (this.linesIntersect(p1, p2, p3, p4)) {
                    line.isGreen = false;
                    otherLine.isGreen = false; // Both lines involved in overlap become red
                }
            }
        }
        
        // Update point states: point is green only if ALL its connected lines are green
        for (let i = 0; i < this.points.length; i++) {
            const connectedLines = this.lines.filter(l => l.from === i || l.to === i);
            // Point is green if it has lines AND all lines are green
            if (connectedLines.length === 0) {
                this.points[i].isGreen = false; // No lines = red point
            } else {
                this.points[i].isGreen = connectedLines.every(l => l.isGreen);
            }
        }
    }
    
    linesIntersect(p1, p2, p3, p4) {
        // Check if two line segments intersect (excluding endpoints)
        // Don't count if they share an endpoint
        const epsilon = 0.1; // Small threshold for floating point comparison
        if ((Math.abs(p1.x - p3.x) < epsilon && Math.abs(p1.y - p3.y) < epsilon) ||
            (Math.abs(p1.x - p4.x) < epsilon && Math.abs(p1.y - p4.y) < epsilon) ||
            (Math.abs(p2.x - p3.x) < epsilon && Math.abs(p2.y - p3.y) < epsilon) ||
            (Math.abs(p2.x - p4.x) < epsilon && Math.abs(p2.y - p4.y) < epsilon)) {
            return false; // They share an endpoint, not an overlap
        }
        
        const denom = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
        if (Math.abs(denom) < 0.0001) return false; // Parallel lines
        
        const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denom;
        const ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denom;
        
        // Check if intersection is within both line segments (not at endpoints)
        // Lines overlap if they cross in the middle (not at endpoints)
        return ua > 0.01 && ua < 0.99 && ub > 0.01 && ub < 0.99;
    }
    
    checkWinCondition() {
        const allPointsGreen = this.points.every(p => p.isGreen);
        const allLinesGreen = this.lines.every(l => l.isGreen);
        return allPointsGreen && allLinesGreen && this.points.length > 0;
    }
    
    onMouseDown(e) {
        // Only allow interaction during playing state
        if (this.gameState !== 'playing') {
            this.isDragging = false;
            this.selectedPoint = null;
            return;
        }
        
        // STRICT: Prevent moving if already moved a point
        if (this.hasMovedPoint) {
            this.isDragging = false;
            this.selectedPoint = null;
            return;
        }
        
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if clicking on a point
        for (let point of this.points) {
            const dist = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
            if (dist <= point.radius * 2) {
                // Only allow if we haven't moved a point yet
                if (!this.hasMovedPoint) {
                    this.selectedPoint = point;
                    this.isDragging = true;
                    this.originalMousePos = { x: point.x, y: point.y };
                }
                break;
            }
        }
    }
    
    onMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mousePos.x = e.clientX - rect.left;
        this.mousePos.y = e.clientY - rect.top;
        
        // STRICT: Only allow dragging if ALL conditions are met
        if (this.gameState !== 'playing') {
            this.isDragging = false;
            this.selectedPoint = null;
            return;
        }
        
        if (this.hasMovedPoint) {
            // Already moved a point - stop dragging
            this.isDragging = false;
            this.selectedPoint = null;
            return;
        }
        
        if (this.isDragging && this.selectedPoint) {
            // Keep point within rectangle bounds
            const minX = this.rectX + this.margin;
            const maxX = this.rectX + this.rectWidth - this.margin;
            const minY = this.rectY + this.margin;
            const maxY = this.rectY + this.rectHeight - this.margin;
            
            this.selectedPoint.x = Math.max(minX, Math.min(maxX, this.mousePos.x));
            this.selectedPoint.y = Math.max(minY, Math.min(maxY, this.mousePos.y));
            
            // Update line states in real-time as point moves
            this.updateLineStates();
        }
    }
    
    onMouseUp(e) {
        // Only process if game is playing and we have a valid selection
        if (this.gameState !== 'playing') {
            this.isDragging = false;
            this.selectedPoint = null;
            return;
        }
        
        // STRICT: If already moved a point, don't allow any more moves
        if (this.hasMovedPoint) {
            this.isDragging = false;
            this.selectedPoint = null;
            return;
        }
        
        if (this.isDragging && this.selectedPoint) {
            const moved = Math.abs(this.selectedPoint.x - this.originalMousePos.x) > 5 ||
                         Math.abs(this.selectedPoint.y - this.originalMousePos.y) > 5;
            
            if (moved) {
                // Player has moved a point - PERMANENTLY lock this action
                this.hasMovedPoint = true;
                this.updateLineStates();
                
                // Check win condition after move
                if (this.checkWinCondition()) {
                    setTimeout(() => {
                        this.gameState = 'win';
                        this.endScreenTimer = 0;
                    }, 100);
                }
            } else {
                // Didn't move enough, reset to original position
                this.selectedPoint.x = this.originalMousePos.x;
                this.selectedPoint.y = this.originalMousePos.y;
                this.updateLineStates();
            }
        }
        
        this.isDragging = false;
        this.selectedPoint = null;
    }
    
    update(deltaTime) {
        // Ensure deltaTime is valid
        if (!deltaTime || deltaTime <= 0) {
            deltaTime = 0.016; // Default to ~60fps
        }
        
        // Update based on game state
        switch (this.gameState) {
            case 'countdown':
                // Backup: Also decrement countdown in update loop (in case interval fails)
                // Primary countdown is in setInterval, this is backup
                if (this.countdownTime <= 0) {
                    const timerContainer = document.getElementById('timerBarContainer');
                    const overlay = document.getElementById('startScreen');
                    if (timerContainer) timerContainer.style.display = 'block';
                    if (overlay) overlay.classList.add('hidden');
                    this.gameState = 'playing';
                    this.timeRemaining = this.gameTime;
                    console.log('Backup: Game started from update loop');
                }
                break;
                
            case 'playing':
                // Update game timer
                this.timeRemaining -= deltaTime;
                if (this.timeRemaining <= 0) {
                    this.timeRemaining = 0;
                    this.gameState = 'fail';
                    this.endScreenTimer = 0;
                }
                
                // Update timer bar
                const timerPercent = this.timeRemaining / this.gameTime;
                document.getElementById('timerBar').style.width = (timerPercent * 100) + '%';
                break;
                
            case 'win':
            case 'fail':
                this.endScreenTimer += deltaTime;
                if (this.endScreenTimer >= this.endScreenHold) {
                    // Reset game after hold
                    this.resetGame();
                }
                break;
        }
        
        // Update particles for background
        this.updateParticles(deltaTime);
    }
    
    updateParticles(deltaTime) {
        // Add new particles occasionally
        if (Math.random() < 0.1) {
            this.particleSystem.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 0.5) * 20,
                life: 1.0,
                decay: 0.01 + Math.random() * 0.02
            });
        }
        
        // Update existing particles
        for (let i = this.particleSystem.length - 1; i >= 0; i--) {
            const p = this.particleSystem[i];
            p.x += p.vx * deltaTime;
            p.y += p.vy * deltaTime;
            p.life -= p.decay * deltaTime * 60;
            
            if (p.life <= 0 || p.x < 0 || p.x > this.canvas.width || p.y < 0 || p.y > this.canvas.height) {
                this.particleSystem.splice(i, 1);
            }
        }
    }
    
    render() {
        // Clear canvas
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw background particles
        this.drawParticles();
        
        // Draw based on game state
        switch (this.gameState) {
            case 'menu':
                // Menu is handled by HTML/CSS
                break;
            case 'countdown':
                this.drawCountdown();
                break;
            case 'playing':
                this.drawGame();
                break;
            case 'win':
                this.drawWinScreen();
                break;
            case 'fail':
                this.drawFailScreen();
                break;
        }
    }
    
    drawParticles() {
        for (let p of this.particleSystem) {
            this.ctx.globalAlpha = p.life * 0.3;
            this.ctx.fillStyle = '#00ff00';
            this.ctx.fillRect(p.x, p.y, 2, 2);
        }
        this.ctx.globalAlpha = 1.0;
    }
    
    drawCountdown() {
        // Countdown is handled by setInterval in selectDifficulty()
        // Make sure overlay is visible and countdown is displayed
        const overlay = document.getElementById('startScreen');
        const countdownEl = document.getElementById('countdown');
        
        if (overlay && this.gameState === 'countdown') {
            overlay.classList.remove('hidden');
            
            // Update countdown display as backup
            if (countdownEl) {
                const displayTime = Math.ceil(this.countdownTime);
                if (displayTime > 0) {
                    countdownEl.textContent = displayTime;
                } else {
                    countdownEl.textContent = '';
                }
            }
        }
    }
    
    drawGame() {
        // Check if puzzle is initialized
        if (!this.points || this.points.length === 0) {
            console.error('No points to draw! Puzzle not initialized.');
            return;
        }
        
        if (this.rectWidth === 0 || this.rectHeight === 0) {
            console.error('Rectangle dimensions are 0! Recalculating...');
            this.createPuzzleLayout();
            return;
        }
        
        // Draw rectangle border
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(this.rectX, this.rectY, this.rectWidth, this.rectHeight);
        
        // Draw lines
        if (this.lines && this.lines.length > 0) {
            for (let line of this.lines) {
                // Validate line indices
                if (line.from >= this.points.length || line.to >= this.points.length) {
                    console.error(`Invalid line indices: from=${line.from}, to=${line.to}, points.length=${this.points.length}`);
                    continue;
                }
                
                const p1 = this.points[line.from];
                const p2 = this.points[line.to];
                
                if (!p1 || !p2) {
                    console.error('Point is null!', line);
                    continue;
                }
                
                // Set line color: GREEN = no overlap, RED = overlaps another line
                if (line.isGreen) {
                    this.ctx.strokeStyle = '#00ff00';
                    this.ctx.shadowBlur = 10;
                    this.ctx.shadowColor = '#00ff00';
                } else {
                    this.ctx.strokeStyle = '#ff0000';
                    this.ctx.shadowBlur = 5;
                    this.ctx.shadowColor = '#ff0000';
                }
                
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.stroke();
            }
        } else {
            console.error('No lines to draw!');
        }
        
        // Reset shadow
        this.ctx.shadowBlur = 0;
        
        // Draw points
        for (let point of this.points) {
            // Skip drawing if point can't be moved (already moved another point)
            if (this.hasMovedPoint && point !== this.selectedPoint) {
                // Make non-movable points appear dimmed
                this.ctx.globalAlpha = 0.5;
            } else {
                this.ctx.globalAlpha = 1.0;
            }
            
            // Draw point: GREEN = all connected lines are green, RED = has red lines
            const gradient = this.ctx.createRadialGradient(
                point.x, point.y, 0,
                point.x, point.y, point.radius
            );
            
            if (point.isGreen) {
                gradient.addColorStop(0, '#00ff00');
                gradient.addColorStop(1, '#008800');
            } else {
                gradient.addColorStop(0, '#ff0000');
                gradient.addColorStop(1, '#880000');
            }
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Draw glow for selected point
            if (point === this.selectedPoint && !this.hasMovedPoint) {
                this.ctx.strokeStyle = '#ffff00';
                this.ctx.lineWidth = 2;
                this.ctx.shadowBlur = 15;
                this.ctx.shadowColor = '#ffff00';
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, point.radius + 5, 0, Math.PI * 2);
                this.ctx.stroke();
                this.ctx.shadowBlur = 0;
            }
        }
        
        // Reset alpha
        this.ctx.globalAlpha = 1.0;
        
        // Show message if point has been moved (can't move another)
        if (this.hasMovedPoint) {
            this.ctx.fillStyle = 'rgba(255, 255, 0, 0.9)';
            this.ctx.font = 'bold 22px Courier New';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('ONE MOVE USED! Solve the puzzle with this position.', 
                this.canvas.width / 2, this.rectY - 25);
        } else {
            // Show instruction
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            this.ctx.font = '18px Courier New';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Move ONE point to remove all overlapping lines (RED → GREEN)', 
                this.canvas.width / 2, this.rectY - 25);
        }
    }
    
    drawWinScreen() {
        // Draw semi-transparent overlay
        this.ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Show win screen overlay
        document.getElementById('winScreen').classList.remove('hidden');
    }
    
    drawFailScreen() {
        // Draw semi-transparent overlay with shake
        const shakeX = (Math.random() - 0.5) * 10;
        const shakeY = (Math.random() - 0.5) * 10;
        
        this.ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        this.ctx.fillRect(shakeX, shakeY, this.canvas.width, this.canvas.height);
        
        // Show fail screen overlay
        document.getElementById('failScreen').classList.remove('hidden');
    }
    
    resetGame() {
        // Clear any intervals
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
        
        // Reset all game state
        this.gameState = 'menu';
        this.countdownTime = 3;
        this.timeRemaining = this.gameTime;
        this.endScreenTimer = 0;
        this.hasMovedPoint = false;
        this.selectedPoint = null;
        this.isDragging = false;
        this.difficulty = null;
        
        // Show menu
        const menu = document.getElementById('difficultyMenu');
        if (menu) {
            menu.classList.remove('hidden');
        }
        
        // Hide overlays
        const startScreen = document.getElementById('startScreen');
        if (startScreen) {
            startScreen.classList.add('hidden');
        }
        const winScreen = document.getElementById('winScreen');
        if (winScreen) winScreen.classList.add('hidden');
        const failScreen = document.getElementById('failScreen');
        if (failScreen) failScreen.classList.add('hidden');
        const timerContainer = document.getElementById('timerBarContainer');
        if (timerContainer) timerContainer.style.display = 'none';
        const countdown = document.getElementById('countdown');
        if (countdown) countdown.textContent = '';
        
        // Clear points and lines
        this.points = [];
        this.lines = [];
    }
    
    gameLoop(timestamp) {
        // Handle first frame
        if (this.lastFrameTime === 0) {
            this.lastFrameTime = timestamp || performance.now();
        }
        
        const currentTime = timestamp || performance.now();
        let deltaTime = (currentTime - this.lastFrameTime) / 1000;
        this.lastFrameTime = currentTime;
        
        // Ensure deltaTime is valid
        if (!deltaTime || deltaTime <= 0 || deltaTime > 1) {
            deltaTime = 0.016; // Default to ~60fps if invalid
        }
        
        // Cap deltaTime to prevent large jumps
        const safeDelta = Math.min(deltaTime, 0.1);
        
        // Countdown is handled by setInterval in init(), not here
        
        this.update(safeDelta);
        this.render();
        
        requestAnimationFrame((ts) => this.gameLoop(ts));
    }
}

// Start game when page loads
function startGame() {
    // Ensure canvas exists
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        // Try again after a short delay
        setTimeout(startGame, 100);
        return;
    }
    
    // Ensure buttons exist
    const easyBtn = document.getElementById('easyBtn');
    const mediumBtn = document.getElementById('mediumBtn');
    const hardBtn = document.getElementById('hardBtn');
    
    if (!easyBtn || !mediumBtn || !hardBtn) {
        console.error('Difficulty buttons not found!');
        // Try again after a short delay
        setTimeout(startGame, 100);
        return;
    }
    
    try {
        window.game = new GameEngine();
        console.log('Game initialized successfully');
    } catch (error) {
        console.error('Error initializing game:', error);
        // Try again after a short delay
        setTimeout(startGame, 100);
    }
}

// Try multiple ways to ensure the game starts
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', startGame);
} else {
    // DOM already loaded
    startGame();
}

// Also try on window load as backup
window.addEventListener('load', () => {
    if (!window.game) {
        console.log('Window loaded, starting game...');
        startGame();
    }
});


