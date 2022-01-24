function setup() {
  frameRate(60);
  textSize(15);
  textAlign(CENTER);
}

function draw() {
  background(200);
  text(frameCount, width / 2, height / 2);
  fill(random(255),random(255),random(255));
}
