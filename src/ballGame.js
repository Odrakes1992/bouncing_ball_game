var canvas = document.getElementById("canvas");
var canvasObject = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var pos = {
  x: 100,
  y: 100,
};

// start off with three balls bouncing to test functionality

var numberOfBalls = 3;

// Create a ball class which is initiated on a click of the page

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.radius = 20; //Math.floor(Math.random() * 25);
    this.color = randomColor();
    this.dx = Math.floor(Math.random() * 5 + 1);
    this.dy = -Math.floor(Math.random() * 5 + 1);
    this.gravity = 0.4;
    this.friction = 0.95;
    this.gravitySpeed = 0;
    this.bounce = 0.6;
  }

  // function for when the ball hits the bottom
  hitbottom() {
    var bottom = canvas.height - this.radius; // diameter == height
    if (this.pos.y > bottom) {
      // console.log(
      //   `This is the bottom ${bottom} and this is the current height of the ball ${this.pos.y} - reached it`
      // );
      this.pos.y = bottom;
      //this.pos.x = 10
      this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      this.dx *= this.friction;
      this.dy *= 0.9;
    } else {
      //console.log(bottom);
    }
  }

  // starts the ball path

  drawBall() {
    canvasObject.beginPath();
    canvasObject.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    canvasObject.fillStyle = this.color;
    canvasObject.fill();
    canvasObject.closePath();
  }

  // function for updating path and bounce off the sides and bottom
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
    this.gravitySpeed += this.gravity;
    this.pos.x += this.dx;
    this.pos.y += this.dy + this.gravitySpeed;
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

// start the balls off at random positions on the canvas

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
