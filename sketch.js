var ball = {

  x: 38,
  y: 57,
  r: 12,
  color: ["red", "lime", "cyan"]
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  ball.r = 30;
  circle(ball.x, ball.y, ball.r);
  fill(ball.color[1]);
}