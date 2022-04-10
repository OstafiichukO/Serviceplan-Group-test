const timeEl = document.querySelector("div");
const btnEl = document.querySelector("button");
btnEl.disabled = false;

let timer;
let time = 10;

function count() {
  timer = setTimeout(countdown, 1000);
  btnEl.disabled = true;
}

function reset() {
  clearTimeout(timer);
  time = 10;
  timeEl.innerHTML = "Count here down from 10 to 0";
  btnEl.disabled = false;
}

function countdown() {
  timeEl.innerHTML = time.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  time--;
  if (time < 0) {
    reset();
  } else {
    count();
  }
}

btnEl.addEventListener("click", countdown);
