function setup() {
createCanvas(displayWidth, displayHeight);
fill(random(255),random(255),random(255));
}


function draw() {
  ellipse(30,30,50,50);
  fill(random(255));

}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
