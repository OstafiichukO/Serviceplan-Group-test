const countText = document.querySelector("div");
const startCountBtn = document.querySelector("button");
let count = 10;

const counter = (count) => {
  count--;
  countText.innerHTML = count;
};

const timer = setInterval(counter, 1000);
