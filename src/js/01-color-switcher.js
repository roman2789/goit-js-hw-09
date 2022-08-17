const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onChangeBgColorClick);
refs.stopBtn.addEventListener('click', onStopChangeBgColor);

let interval = null;
const DELAY = 1000;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeBgColorClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopChangeBgColor() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(interval);
}
