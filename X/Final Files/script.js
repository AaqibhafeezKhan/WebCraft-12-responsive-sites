document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('nav-hamburger');
    const megaLinks = document.getElementById('nav-mega-links');
    const loginBtn = document.getElementById('nav-login-btn');
    const signupBtn = document.getElementById('nav-signup-btn');
    const authPanel = document.getElementById('auth-panel');
    const loginForm = document.getElementById('login-form-wrap');
    const signupPanel = document.getElementById('signup-panel');
    const backToLogin = document.getElementById('back-to-login-btn');
    const switchToSignup = document.getElementById('switch-to-signup-btn');
    const navLogo = document.getElementById('nav-logo');

    // Mega menu toggle for mobile
    if (hamburger && megaLinks) {
        hamburger.addEventListener('click', () => {
            megaLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Auth panel logic
    const openAuth = (mode) => {
        authPanel.classList.add('active');
        if (mode === 'login') {
            loginForm.style.display = 'block';
            signupPanel.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            signupPanel.style.display = 'block';
        }
    };

    if (loginBtn) loginBtn.addEventListener('click', () => openAuth('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => openAuth('signup'));
    if (switchToSignup) switchToSignup.addEventListener('click', () => openAuth('signup'));
    if (backToLogin) backToLogin.addEventListener('click', () => openAuth('login'));

    if (navLogo) {
        navLogo.addEventListener('click', (e) => {
            if (authPanel.classList.contains('active')) {
                e.preventDefault();
                authPanel.classList.remove('active');
            }
        });
    }

    // Dropdown hover effect for desktop
    const dropdownItems = document.querySelectorAll('.nav-mega-item');
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 1000) {
                const dropdown = item.querySelector('.mega-dropdown');
                if (dropdown) {
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.transform = 'translateY(0)';
                }
            }
        });
        item.addEventListener('mouseleave', () => {
            if (window.innerWidth > 1000) {
                const dropdown = item.querySelector('.mega-dropdown');
                if (dropdown) {
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.transform = 'translateY(10px)';
                }
            }
        });
    });
});
