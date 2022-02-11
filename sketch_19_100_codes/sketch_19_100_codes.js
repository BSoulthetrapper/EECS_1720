let a;
let direction;

function setup() {
  createCanvas(displayWidth, displayHeight);
  colorMode(RGB, width);
  a = 0;
  direction = true;
  frameRate(30);
}

function draw() {
  a++;
  if (a > displayWidth) {
    a = 0;
    direction = !direction;
  }
  if (direction === true) {
    stroke(a);
  } else {
    stroke(displayWidth - a);
  }
  line(a, 0, a, displayHeight / 2);
}
