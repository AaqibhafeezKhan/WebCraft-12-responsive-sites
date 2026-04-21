let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".c_hrk6i0 h2");
const circles = document.querySelectorAll(".c_u8o9yy");
const menu = document.querySelector(".c_j0eh96");
const section1wrapper = document.querySelector(".c_zdbbk3");
const section5wrapper = document.querySelector(".c_cfhgnk");

section1wrapper.style.transform = "scale(1)";

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;

  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};

const pageController = () => {
  bool = true;
  if (counter1 === 5) {
    Array.from(sections).forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    section1wrapper.style.transform = "scale(1)";
    section5wrapper.style.transform = "scale(1.5)";
    progressCounter();
    bool = false;
  }

  if (counter1 === -1) {
    Array.from(sections).forEach((section) => {
      if (section.classList[0] === "c_mxenvm") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 4;
    counter2 = 5;
    section1wrapper.style.transform = "scale(1.5)";
    section5wrapper.style.transform = "scale(1)";
    progressCounter();
    bool = false;
  }
  progressCounter();
  return bool;
};

window.addEventListener("wheel", (e) => {
  const deltaY = e.deltaY > 0;

  if (deltaY) {
    counter1++;
    counter2++;
  } else {
    counter1--;
    counter2--;
  }

  pageController();
  progressCounter();
  console.log(counter1, counter2);

  if (bool) {
    document.querySelector(
      `.section-${deltaY ? counter1 : counter2}`
    ).style.left = `${deltaY ? "-100vw" : "0"}`;

    document.querySelector(
      `.section-${deltaY ? counter1 : counter2}-wrapper`
    ).style.transform = `scale(${deltaY ? "1.5" : "1"})`;

    document.querySelector(
      `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
    ).style.transform = `scale(${deltaY ? "1" : "1.5"})`;
  }
});

document.querySelector(".c_0mib6u").addEventListener("click", () => {
  counter1--;
  counter2--;
  pageController() &&
    (document.querySelector(`.section-${counter2}`).style.left = "0");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".c_1ws0db").addEventListener("click", () => {
  counter1++;
  counter2++;
  pageController() &&
    (document.querySelector(`.section-${counter1}`).style.left = "-100vw");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".c_v7dtlt").addEventListener("mouseover", () => {
  document.querySelector(".c_woj8k1").style.opacity = ".5";
});

document.querySelector(".c_v7dtlt").addEventListener("mouseout", () => {
  document.querySelector(".c_woj8k1").style.opacity = "1";
});

menu.addEventListener("click", () => {
  document.querySelector(".c_x04qzm").classList.toggle("c_b0c9kr");
});
