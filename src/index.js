const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//generate random coordinates

var ball = canvas.getContext("2d");

var x = Math.floor(Math.random() * innerWidth);
var y = Math.floor(Math.random() * innerHeight);
var xspeed = Math.floor(Math.random() * 4);
var yspeed = Math.floor(Math.random() * 6);
var radius = 50;

run();

function run() {
  requestAnimationFrame(run);
  ball.clearRect(0, 0, innerWidth, innerHeight);
  // work with one ball first and then update code to allow for second ball when the page is touched.

  ball.beginPath();
  ball.strokeStyle = "white";
  ball.arc(x, y, radius, 0, Math.PI * 2, false);
  ball.stroke();
  ball.fill();

  // create a function which allows it to bounce off the sides

  if (radius + x > innerWidth) {
    xspeed = 0 - xspeed;
  }

  if (x - radius < 0) {
    xspeed = 0 - xspeed;
  }

  if (y + radius >= innerHeight) {
    yspeed = 0 - yspeed;
  }

  if (y - radius < 0) {
    yspeed = 0 - yspeed;
  }

  x = x + xspeed;
  y = y + yspeed;

  // create a function that when it hits the ground it will bounce until it runs out of energy and stops
}

function trailingBounce() {
  let bottom = canvas.height - y;
}
