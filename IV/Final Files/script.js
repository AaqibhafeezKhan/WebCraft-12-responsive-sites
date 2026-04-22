document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll(".prestige-video");

    videos.forEach((video) => {
        video.addEventListener("mouseenter", () => {
            video.play();
        });
        video.addEventListener("mouseleave", () => {
            video.pause();
        });
    });

    // Handle form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Enquiry received. Our concierge will contact you shortly.');
            form.reset();
        });
    }
});
