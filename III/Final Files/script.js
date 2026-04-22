document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector(".cyber-nav");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".cyber-nav a");
    const skillFills = document.querySelectorAll(".skill-fill");

    const handleScroll = () => {
        const scrollPos = window.pageYOffset;

        // Sticky Nav logic
        if (scrollPos > 100) {
            nav.classList.add("nav-active");
        } else {
            nav.classList.remove("nav-active");
        }

        // Active link highlighting
        sections.forEach((section, i) => {
            if (scrollPos >= section.offsetTop - 150) {
                navLinks.forEach((link) => link.classList.remove("active"));
                if (navLinks[i]) navLinks[i].classList.add("active");
            }
        });

        // Skill bar animation trigger
        const aboutSection = document.querySelector(".about-section");
        if (aboutSection && scrollPos + window.innerHeight >= aboutSection.offsetTop + 200) {
            skillFills.forEach(fill => {
                const width = fill.style.width;
                fill.classList.add("animated");
            });
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
});
