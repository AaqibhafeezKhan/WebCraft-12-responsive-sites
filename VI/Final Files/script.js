document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('nav-hamburger');
    const drawer = document.getElementById('nav-drawer');
    const drawerLinks = document.querySelectorAll('.nav-drawer-links a');

    if (hamburger && drawer) {
        hamburger.addEventListener('click', () => {
            drawer.classList.toggle('active');
            hamburger.classList.toggle('change');
        });
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            drawer.classList.remove('active');
            hamburger.classList.remove('change');
        });
    });

    // Tour card flipping
    const revealBtns = document.querySelectorAll('.price-reveal-btn');
    const backBtns = document.querySelectorAll('.back-btn');

    revealBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.tour-card').classList.add('flipped');
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.tour-card').classList.remove('flipped');
        });
    });
});
