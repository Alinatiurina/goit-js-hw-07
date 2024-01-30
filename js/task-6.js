function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const amount = document.querySelector('#controls input').value;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");


function createBoxes(amount) {
  boxes.innerHTML = '';
  if (1 <= amount && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.height = `${30+10*i}px`;
      box.style.width = `${30+10*i}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(box);
      document.querySelector('#controls input').value = ''
    }
  }

}

btnCreate.addEventListener('click', () => {
  const amount = document.querySelector('#controls input').value
  createBoxes(amount)
})


function destroyBoxes() {
  boxes.innerHTML = '';
  
}
  
btnDestroy.addEventListener('click', destroyBoxes);
