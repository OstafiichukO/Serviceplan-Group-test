const canvas = document.querySelector("canvas");
canvas.width = 300;
canvas.height = 250;

const c = canvas.getContext("2d");
const colorArray = "black";
let gravity = 0.8;
let friction = 0.8;

addEventListener("click", function () {
  init();
});

function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  };
  this.update = function () {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += gravity;
    }
    if (
      this.x + this.radius + this.dx > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

let ballArray = [];
function init() {
  ballArray = [];
  let radius = 25;
  let x = 150;
  let y = -50;
  let dx = 0;
  let dy = 1;
  color = colorArray;
  ballArray.push(new Ball(x, y, dx, dy, radius, color));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].update();
  }
}
init();
animate();
