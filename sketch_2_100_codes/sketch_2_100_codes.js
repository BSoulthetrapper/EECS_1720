function setup() {
createCanvas(640,360);
}


function draw() {
  background(random(255));
  ellipseMode(CORNER);
  fill(255);
  ellipse(320, 180, 50, 50); 
  ellipseMode(CORNERS);
  fill(random(255),random(255),random(255));
  ellipse(320, 180, 50, 50);
}
