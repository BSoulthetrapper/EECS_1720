const barWidth = 20;
let lastBar = -1;

function setup() {
  createCanvas(displayWidth, displayHeight);
  colorMode(HSB, displayWidth, displayHeight, 100);
  noStroke();
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, mouseY, 66);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}
