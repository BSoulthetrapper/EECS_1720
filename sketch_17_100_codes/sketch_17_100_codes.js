let y = 200;


function setup() {
  createCanvas(displayWidth, displayHeight); 
  stroke(255);
  frameRate(60);
}

function draw() {
  background(0); 
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
