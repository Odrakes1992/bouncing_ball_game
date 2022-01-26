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
  ball.strokeStyle = "red";
  ball.arc(x, y, radius, 0, Math.PI * 2, false);
  ball.stroke();

  // create a function which allows it to bounce off the sides

  if (radius + x > innerWidth) xspeed = 0 - xspeed;

  if (x - radius < 0) xspeed = 0 - xspeed;

  if (y + radius > innerHeight) yspeed = 0 - yspeed;

  if (y - radius < 0) yspeed = 0 - yspeed;

  x = x + xspeed;
  y = y + yspeed;

  // create a function that when it hits the ground it will bounce until it runs out of energy and stops
}

// var canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var l = canvas.getContext("2d");

// // x and y are the co-ordinates of the circle

// // vx and vy are the respective speeds

// var x = Math.floor(Math.random() * innerWidth);
// var y = Math.floor(Math.random() * innerHeight);
// var vx = Math.floor(Math.random() * 4);
// var vy = Math.floor(Math.random() * 6);
// var radius = 20;

// move();

// function move() {
//   requestAnimationFrame(move);

//   // It clears the specified pixels within
//   // the given rectangle
//   l.clearRect(0, 0, innerWidth, innerHeight);

//   // Creating a circle
//   l.beginPath();
//   l.strokeStyle = "black";
//   l.arc(x, y, radius, 0, Math.PI * 2, false);
//   l.stroke();

//   // Conditions sso that the ball bounces
//   // from the edges
//   if (radius + x > innerWidth) vx = 0 - vx;

//   if (x - radius < 0) vx = 0 - vx;

//   if (y + radius > innerHeight) vy = 0 - vy;

//   if (y - radius < 0) vy = 0 - vy;

//   x = x + vx;
//   y = y + vy;
// }
