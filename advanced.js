
// Parallax effect on scroll
gsap.to('.hero', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 200,
    opacity: 0.5
});

// Scroll animations for sections
gsap.utils.toArray('section:not(.hero)').forEach((section, index) => {
    gsap.from(section, {
        scrollTrigger: { 
            trigger: section, 
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0, 
        y: 60, 
        duration: 1,
        ease: "power2.out"
    });
});

// Polaroid hover effects
document.querySelectorAll('.polaroid').forEach(polaroid => {
    polaroid.addEventListener('mouseenter', () => {
        gsap.to(polaroid, { 
            scale: 1.05, 
            rotation: 0, 
            duration: 0.3, 
            ease: "back.out(1.7)" 
        });
    });
    
    polaroid.addEventListener('mouseleave', () => {
        const randomRotation = Math.random() * 10 - 5;
        gsap.to(polaroid, { 
            scale: 1, 
            rotation: randomRotation, 
            duration: 0.3, 
            ease: "power2.out" 
        });
    });
});

// Animated counter for timer
function animateNumber(element, target) {
    gsap.to(element, {
        textContent: target,
        duration: 0.5,
        snap: { textContent: 1 },
        ease: "power1.out"
    });
}
