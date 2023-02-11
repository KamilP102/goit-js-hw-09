const body = document.querySelector("body");
const startButton = document.querySelector('button[data-start]');

function changeBodyColor() {
body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const myInterval = setInterval(changeBodyColor, 1000);



startButton.addEventListener("click", myInterval);