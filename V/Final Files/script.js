document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-btn');
    const overlay = document.getElementById('overlay-nav');
    const closeBtn = document.getElementById('overlay-close');
    const navLinks = document.querySelectorAll('.overlay-nav-links a');

    if (hamburger && overlay) {
        hamburger.addEventListener('click', () => {
            overlay.classList.add('active');
        });
    }

    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    });

    // Form logic
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Vision received. We will contact you to build your dream.');
            form.reset();
        });
    }
});
