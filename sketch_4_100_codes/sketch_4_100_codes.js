function setup() {
createCanvas(640,360);
}


function draw() {
  triangle(30,90,60,60,90,90);
  fill(random(255),random(255),random(255));
  triangle(30,75,60,105,90,75);
  fill(random(255),random(255),random(255));
}
