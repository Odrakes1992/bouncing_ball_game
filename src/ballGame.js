var canvas = document.getElementById("canvas");
var canvasObject = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var pos = {
  x: 100,
  y: 100,
};
var numberOfBalls = 3;

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.radius = 20; //Math.floor(Math.random() * 25);
    this.color = randomColor();
    this.dx = Math.floor(Math.random() * 5 + 1);
    this.dy = -Math.floor(Math.random() * 5 + 1);
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 0.8;
  }

  // function for when the ball hits the bottom
  hitbottom() {
    var bottom = canvas.height - this.radius * 2;
    if (this.pos.y > bottom) {
      console.log(
        `This is the bottom ${bottom} and this is the current height of the ball ${this.pos.y} - reached it`
      );
      //this.pos.y = bottom;
      //this.gravitySpeed = -(this.gravitySpeed * this.bounce);
    } else {
      //console.log(bottom);
    }
  }

  drawBall() {
    canvasObject.beginPath();
    canvasObject.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    canvasObject.fillStyle = this.color;
    canvasObject.fill();
    canvasObject.closePath();
  }

  updateBall() {
    if (
      this.pos.x + this.dx > canvas.width - this.radius ||
      this.pos.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }
    if (
      this.pos.y + this.dy > canvas.height - this.radius ||
      this.pos.y + this.dy < this.radius
    ) {
      this.dy = -this.dy;
    }
    this.pos.x += this.dx;
    this.pos.y += this.dy;
    this.hitbottom();
    canvasObject.beginPath();
    canvasObject.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    canvasObject.fillStyle = this.color;
    canvasObject.fill();
  }
}

function randomColor() {
  const rc1 = Math.random() * 16777215;
  const rc2 = Math.floor(rc1);
  const rc3 = rc2.toString(16);
  return "#" + rc3;
}

function randomPos() {
  pos = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
  };
  return pos;
}

var balls = [];

for (let index = 0; index < numberOfBalls; index++) {
  balls.push(new Ball(randomPos()));
  balls[index].drawBall();
}

setInterval(function () {
  canvasObject.clearRect(0, 0, canvas.width, canvas.height);
  for (let index = 0; index < balls.length; index++) {
    balls[index].updateBall();
  }
}, 10);

// Mouse position

function printMousePos(event) {
  console.log(`${event.clientX} and ${event.clientY}`);
  // document.body.textContent =
  //   "clientX: " + event.clientX + " - clientY: " + event.clientY;

  newPosition = {
    x: event.clientX,
    y: event.clientY,
  };
  console.log(canvas.height);
  newBall = new Ball(newPosition);
  balls.push(newBall);
  newBall.drawBall();
}

document.addEventListener("click", printMousePos);
console.log(canvas.height);
