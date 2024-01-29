function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const textColor = document.querySelector(".color");


function changeColor() {
const newColor = getRandomHexColor();
body.style.backgroundColor = newColor;
textColor.textContent = newColor;
}

btn.addEventListener("click", changeColor)