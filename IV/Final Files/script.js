document.querySelector(".c_tl6j0j").addEventListener("click", () => {
  document.querySelectorAll(".c_m5uj0j").forEach((item) => {
    item.classList.toggle("c_hr1grq");
  });
});

document.querySelectorAll(".c_yehn4u").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".c_m5uj0j").forEach((item) => {
      item.classList.remove("c_hr1grq");
    });
  });
});

const videos = document.querySelectorAll(".c_hzj8bx");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
