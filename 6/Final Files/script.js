const wrap-container = document.querySelector(".c_0elwl7");

document.querySelector(".c_iw6qkr").addEventListener("click", () => {
  wrap-container.classList.add("c_ifyq4u");
});

document.querySelector(".c_m6qd8a").addEventListener("click", () => {
  wrap-container.classList.remove("c_ifyq4u");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".c_pthfon")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".c_p0ltpp")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("c_ifyq4u");
  };
});
