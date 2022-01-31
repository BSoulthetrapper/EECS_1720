function setup() {
  createCanvas(displayWidth, displayHeight);
}


function draw() {
  background(0);
  fill(255);
  ellipse(frameCount, height/2, 300, 300);
  
  if(frameCount > width) {
  frameCount = -150;
  }
  fill(random(255),random(255),random(255));
  textSize(60);
  textAlign(CENTER);
  text(frameCount, width/2, height/2);
}
