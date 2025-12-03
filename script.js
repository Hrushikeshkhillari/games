// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all nav links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Handle hash-based navigation on page load
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const targetLink = document.querySelector(`[data-section="${hash}"]`);
        if (targetLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            targetLink.classList.add('active');
            document.getElementById(hash).classList.add('active');
        }
    }

    // Add typing effect to console output
    const consoleLines = document.querySelectorAll('.console-text');
    consoleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        setTimeout(() => {
            typeText(line, text, 30);
        }, index * 800);
    });
});

// Typing effect function
function typeText(element, text, speed) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) return;
    
    const navLinks = document.querySelectorAll('.nav-link');
    const activeIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));
    
    if (e.key === 'ArrowLeft' && activeIndex > 0) {
        navLinks[activeIndex - 1].click();
    } else if (e.key === 'ArrowRight' && activeIndex < navLinks.length - 1) {
        navLinks[activeIndex + 1].click();
    }
});

// Add hover sound effects (optional - commented out)
/*
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Optional: Add sound effect
    });
});
*/

