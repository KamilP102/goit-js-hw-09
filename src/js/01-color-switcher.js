import _ from 'lodash';
const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const handelColorChange = startButton.addEventListener('click', () => {
  changeBodyColor();
  startButton.disabled = true;
  stopButton.disabled = false;
  colorInterval = setInterval(changeBodyColor, 1000);
});

const handelStopButton = stopButton.addEventListener('click', () => {
  clearInterval(colorInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
});
