// Initialize AOS (Animate On Scroll)
AOS.init({
    once: true,
    mirror: false,
});

// Código para remover a tela de carregamento
window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        // Adiciona a classe .hidden que você criou no CSS
        loadingOverlay.classList.add('hidden');
        
        // Opcional: Remover o elemento do HTML após a transição (0.5s) para limpar a memória
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // --- INÍCIO DA CORREÇÃO DA MÚSICA ---
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');

    // Define o volume inicial (opcional: 0.5 é 50%)
    if (bgMusic) bgMusic.volume = 0.5;

    if (musicToggle && bgMusic) {
        musicToggle.addEventListener('click', () => {
            if (bgMusic.paused) {
                // Se estiver pausado, toca e muda o ícone
                bgMusic.play().catch(error => console.log("Erro ao tocar:", error));
                musicToggle.textContent = '🔊'; // Ícone de som ligado
                musicToggle.classList.remove('muted');
                musicToggle.setAttribute('aria-label', 'Pausar música');
            } else {
                // Se estiver tocando, pausa e muda o ícone
                bgMusic.pause();
                musicToggle.textContent = '🔇'; // Ícone de mudo
                musicToggle.classList.add('muted');
                musicToggle.setAttribute('aria-label', 'Tocar música');
            }
        });
    }
    // --- FIM DA CORREÇÃO DA MÚSICA ---

    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const celebrationOverlay = document.getElementById('celebration-overlay');

    // ... (Mantenha o restante do seu código do Timer e dos botões aqui)
    // Timer Logic
    const startDate = new Date('2025-04-06T16:00:00');
    
    function updateTimer() {
        // ... (seu código original do timer continua igual)
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // Verificação de segurança caso os elementos não existam na página
        if(document.getElementById('days')) document.getElementById('days').textContent = days;
        if(document.getElementById('hours')) document.getElementById('hours').textContent = hours;
        if(document.getElementById('minutes')) document.getElementById('minutes').textContent = minutes;
        if(document.getElementById('seconds')) document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // Confetti effect on 'Yes'
    btnYes.addEventListener('click', () => {
        // Tenta tocar a música automaticamente quando ela diz SIM (opcional)
        if (bgMusic && bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = '🔊';
            musicToggle.classList.remove('muted');
        }

        // ... (seu código original do confete e animações continua igual)
        const duration = 3000;
        const end = Date.now() + duration;
        
        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#d4af37', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#d4af37', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Show celebration overlay logic...
        celebrationOverlay.classList.remove('hidden');
        celebrationOverlay.style.display = 'flex';
        
        // Animações GSAP originais...
        gsap.from(celebrationOverlay, { scale: 0.8, opacity: 0, duration: 0.6, ease: "back.out(1.7)" });
        gsap.from('.celebration-content h2', { y: -50, opacity: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
        gsap.from('.detail-item', { x: -30, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.5, ease: "power2.out" });
        gsap.set('.voucher', { opacity: 1, scale: 1, visibility: 'visible' });
        gsap.from('.voucher', { scale: 0, rotation: 360, opacity: 0, duration: 0.5, stagger: 0.15, delay: 0.8, ease: "back.out(2)" });
        gsap.from('.btn-instagram', { y: 30, opacity: 0, duration: 0.6, delay: 1.2, ease: "power2.out" });
        
        btnNo.style.display = 'none';
        document.getElementById('bg-layer').classList.add('visible');
    });

    // 'No' button logic
    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('touchstart', moveButton);

    function moveButton(e) {
        if(e.type === 'touchstart') e.preventDefault();
        
        gsap.to(btnNo, {
            x: -5, duration: 0.05, yoyo: true, repeat: 3,
            onComplete: () => {
                if (btnNo.parentNode !== document.body) {
                    document.body.appendChild(btnNo);
                }
                const width = window.innerWidth;
                const height = window.innerHeight;
                const btnRect = btnNo.getBoundingClientRect();
                let newX = Math.random() * (width - btnRect.width - 100) + 50;
                let newY = Math.random() * (height - btnRect.height - 100) + 50;

                gsap.to(btnNo, { position: 'fixed', left: newX, top: newY, duration: 0.3, ease: "power2.out" });
                btnNo.style.zIndex = '10001';
            }
        });
    }
});

    // Timer Logic
    // Set start date: April 6, 2025, at 16:00
    const startDate = new Date('2025-04-06T16:00:00');

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateTimer, 1000);
    updateTimer(); // Initial call

    // Confetti effect on 'Yes'
    btnYes.addEventListener('click', () => {
        // Launch confetti
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#d4af37', '#ffffff'] // Gold and White
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#d4af37', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Play success sound
        if (typeof playSuccessSound === 'function') {
            playSuccessSound();
        }

        // Show celebration overlay with dramatic animation
        celebrationOverlay.classList.remove('hidden');
        celebrationOverlay.style.display = 'flex';
        
        // Animate overlay entrance
        gsap.from(celebrationOverlay, {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
        
        gsap.from('.celebration-content h2', {
            y: -50,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out"
        });
        
        gsap.from('.detail-item', {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.5,
            ease: "power2.out"
        });
        
        // Ensure vouchers are visible
        gsap.set('.voucher', { opacity: 1, scale: 1, visibility: 'visible' });
        
        gsap.from('.voucher', {
            scale: 0,
            rotation: 360,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            delay: 0.8,
            ease: "back.out(2)"
        });
        
        gsap.from('.btn-instagram', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: 1.2,
            ease: "power2.out"
        });
        
        // Hide 'No' button
        btnNo.style.display = 'none';

        // Change background
        document.getElementById('bg-layer').classList.add('visible');
    });

    // 'No' button running away logic with shake effect
    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('touchstart', moveButton);

    function moveButton(e) {
        if(e.type === 'touchstart') e.preventDefault();
        
        // Play click sound
        if (typeof playClickSound === 'function') {
            playClickSound();
        }
        
        // Shake animation before moving
        gsap.to(btnNo, {
            x: -5,
            duration: 0.05,
            yoyo: true,
            repeat: 3,
            onComplete: () => {
                // CRITICAL FIX: Move button to body to escape any transform contexts (like AOS)
                if (btnNo.parentNode !== document.body) {
                    document.body.appendChild(btnNo);
                }

                // Get viewport dimensions
                const width = window.innerWidth;
                const height = window.innerHeight;
                
                // Get button dimensions
                const btnRect = btnNo.getBoundingClientRect();
                
                // Calculate random position with padding
                let newX = Math.random() * (width - btnRect.width - 100) + 50;
                let newY = Math.random() * (height - btnRect.height - 100) + 50;

                // Animate to new position
                gsap.to(btnNo, {
                    position: 'fixed',
                    left: newX,
                    top: newY,
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                btnNo.style.zIndex = '10001';
            }
        });
    }
