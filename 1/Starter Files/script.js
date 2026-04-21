

document.addEventListener("DOMContentLoaded", () => {
    
    const menuBtn = document.querySelector(".c_xc87jy");
    menuBtn.addEventListener("click", () => {
      document.querySelectorAll(".c_ch28mr").forEach((item) => {
        item.classList.toggle("c_xlv79v");
      });
    });
  
    
    const icons = document.querySelectorAll(".c_athhpq i");
    let currentIndex = 0;
    setInterval(() => {
      icons[currentIndex].classList.remove("c_xlv79v");
      currentIndex = (currentIndex + 1) % icons.length;
      icons[currentIndex].classList.add("c_xlv79v");
    }, 4000);
  
    
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("c_lgo01i");
      const icon = themeToggle.querySelector("i");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("fa-sun");
    });
  
    
    const scrollBtn = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  