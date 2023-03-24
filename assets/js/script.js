let animation = document.querySelector(".loader");
let spinner = document.createElement("div");
spinner.classList.add("spinner");
animation.appendChild(spinner);

window.onload = () => {
  spinner.remove();
  animation.style.minHeight = 0;
};
