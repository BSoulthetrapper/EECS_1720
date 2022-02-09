let circleX;
let circleY;
let circleSize;

function setup() {
  createCanvas(300, 300);
  noFill();
  strokeWeight(5);
  circleX = width / 2;
  circleY = height / 2;
  circleSize = 0;
  
}

function draw() {
  background(random(255), random(255), random(255));

  circleSize += 10;

  stroke(0, 64, 128);
  circle(circleX, circleY, circleSize);
  circle(circleX, circleY, circleSize * .75);
  circle(circleX, circleY, circleSize * .5);
}

function mousePressed(){
  circleX = mouseX;
  circleY = mouseY;
  circleSize = 0;
}
