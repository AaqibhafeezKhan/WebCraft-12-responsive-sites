document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor-dot");
    const links = document.querySelectorAll("a, .menu-toggle");

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover");
        });
    });

    gsap.registerPlugin();

    const tl = gsap.timeline();

    tl.fromTo(".reveal-text", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" }
    )
    .fromTo(".mask-reveal img",
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
        "-=1"
    )
    .fromTo(".reveal-fade",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" },
        "-=1"
    );

    const heroImage = document.querySelector(".image-wrapper img");
    document.addEventListener("mousemove", (e) => {
        if(!heroImage) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(heroImage, {
            x: x,
            y: y,
            duration: 1,
            ease: "power2.out"
        });
    });

    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out"
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        gsap.set(item, { y: 50, opacity: 0 });
        observer.observe(item);
    });
});
