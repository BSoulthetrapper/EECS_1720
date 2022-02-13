let y;

function setup() {
  createCanvas(displayWidth, displayHeight);
  stroke(255);
  noLoop();
  y = height * 0.5;
}


function draw() {
  background(random(255), random(255), random(255));
  y = y - 4;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed() {
  redraw();
}
