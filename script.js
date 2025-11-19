// --- 1. PAGE TRANSITIONS ---
document.addEventListener('DOMContentLoaded', () => {
    // Add transition curtain to every page
    const curtain = document.createElement('div');
    curtain.classList.add('transition-curtain');
    document.body.appendChild(curtain);

    // Intercept clicks on links to play animation first
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            document.body.classList.add('exiting');
            setTimeout(() => {
                window.location.href = href;
            }, 800); // Wait for animation
        });
    });
});

// --- 2. ENVELOPE LOGIC (For letter.html) ---
const message = "To my dear chirkut!!,\n\nHappiest Birthday💌! 🎂\n\nYou are the most incredible person I know. Watching you grow has been my greatest joy.\n\nMay this year bring you as much happiness as you bring to everyone around you. Love you forever!chirkut!! ❤️";

function openEnvelope() {
    const wrapper = document.querySelector('.envelope-wrapper');
    const textEl = document.getElementById('type-text');
    const nextBtn = document.getElementById('next-btn');

    if (!wrapper.classList.contains('open')) {
        wrapper.classList.add('open');
        
        // Wait for letter to slide up (1.5s) then type
        setTimeout(() => {
            let i = 0;
            const speed = 40; // Typing speed
            function typeWriter() {
                if (i < message.length) {
                    textEl.innerHTML += message.charAt(i) === '\n' ? '<br>' : message.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    nextBtn.style.opacity = '1'; // Show button when done
                    nextBtn.style.pointerEvents = 'all';
                }
            }
            typeWriter();
        }, 1500);
    }
}

// --- 3. MUSIC & COUNTDOWN (For cake.html) ---
function initParty() {
    // Start Confetti
    const duration = 3000;
    const end = Date.now() + duration;
    
    if(typeof confetti !== 'undefined') {
        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ffb7b2', '#ffdac1'] });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ffb7b2', '#ffdac1'] });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    }

    // Music Toggle
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('music-btn');
    btn.addEventListener('click', () => {
        if(audio.paused) { audio.play(); btn.innerHTML = '⏸️'; }
        else { audio.pause(); btn.innerHTML = '🎵'; }
    });
}