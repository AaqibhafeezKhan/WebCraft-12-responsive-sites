document.addEventListener('DOMContentLoaded', () => {
    // Simple word rotation for the hero title
    const words = document.querySelectorAll('.rotating-word');
    let currentWordIndex = 0;

    if (words.length > 0) {
        setInterval(() => {
            words[currentWordIndex].classList.remove('active');
            currentWordIndex = (currentWordIndex + 1) % words.length;
            words[currentWordIndex].classList.add('active');
        }, 3000);
    }

    // Video play/pause on overlay click
    const playBtn = document.getElementById('play-btn');
    const video = document.getElementById('about-video');
    const overlay = document.querySelector('.play-overlay');

    if (playBtn && video) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            } else {
                video.pause();
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'all';
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! NexAgency will get back to you within 24 hours.');
            contactForm.reset();
        });
    }
});
