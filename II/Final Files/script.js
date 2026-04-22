document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.about-toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const card = toggle.closest('.team-card');
            const info = card.querySelector('.about-text');
            
            // On mobile, we might want to toggle visibility on click
            const isVisible = window.getComputedStyle(info).display === 'block';
            info.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(targetId);
                if(targetEl) {
                    window.scrollTo({
                        top: targetEl.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});