const canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// work with one ball first and then update code to allow for second ball when the page is touched.
var ball = canvas.getContext("2d");

ball.beginPath();
ball.strokeStyle = "red";
ball.arc(500, 500, 20, Math.PI * 2, false);
ball.stroke();

// create a function which allows it to bounce off the sides

// create a function that when it hits the ground it will bounce until it runs out of energy and stops
