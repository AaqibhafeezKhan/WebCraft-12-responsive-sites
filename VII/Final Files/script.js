document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll(".wine-section");
    const counter = document.getElementById("slide-counter");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("arrow-prev");
    const nextBtn = document.getElementById("arrow-next");
    const hamburger = document.getElementById("hamburger-wine");
    const navLinks = document.getElementById("wine-nav-desktop");

    let currentSlide = 0;
    const totalSlides = 5;

    const updateSlide = (index) => {
        currentSlide = (index + totalSlides) % totalSlides;
        
        // In this specific design, slides are often handled by moving them off-screen or changing classes
        // Based on the old script, it was moving sections left: 0 or -100vw
        sections.forEach((section, idx) => {
            if (idx < currentSlide) {
                section.style.left = "-100vw";
            } else {
                section.style.left = "0";
            }
        });

        // Update UI
        if(counter) counter.textContent = `${currentSlide + 1}/${totalSlides}`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentSlide);
        });
    };

    if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentSlide - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentSlide + 1));
    
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => updateSlide(idx));
    });

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll wheel support
    let scrollTimeout;
    window.addEventListener('wheel', (e) => {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0) updateSlide(currentSlide + 1);
            else updateSlide(currentSlide - 1);
            scrollTimeout = null;
        }, 500);
    });
});
