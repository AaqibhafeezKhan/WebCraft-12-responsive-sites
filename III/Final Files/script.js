const nav-top = document.querySelector(".c_4d7r7a");
const nav-topOffsetTop = nav-top.offsetTop;
const sections = document.querySelectorAll("section");
const nav-topLinks = document.querySelectorAll(".c_uptqgs");
const progress = document.querySelector(".c_gm3iru");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= nav-topOffsetTop) {
    nav-top.classList.add("c_qcw28l");
  } else {
    nav-top.classList.remove("c_qcw28l");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      nav-topLinks.forEach((nav-topLink) => {
        nav-topLink.classList.remove("c_q2frj7");
      });
      nav-topLinks[i].classList.add("c_q2frj7");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".c_oiook8").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});
