function setup(){
  createCanvas(displayWidth,displayHeight);
  background(150);
}

function draw(){
  fill(255, 255, 0);
  noStroke();
  if(mouseIsPressed){
    circle(mouseX, mouseY, 20);
  }
}
