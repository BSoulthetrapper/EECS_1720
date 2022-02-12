function setup() {
  createCanvas(displayWidth, displayHeight);
  textAlign(CENTER, CENTER);
  textSize(72);
  noStroke();
  frameRate(60);
}

function draw() {

  let message;

  if(frameCount % 3 == 0 && frameCount % 5 == 0) {
    background(255, 0, 0);
    fill(0);
    message = 'Hello world';
  } else if(frameCount % 3 == 0) {
    background(0, 255, 0);
    fill(0);
    message = 'Fizz';
  } else if(frameCount % 5 == 0) {
    background(0, 0, 255);
    fill(255);
    message = 'Buzz';
  } else{
    background(32);
    fill(255);
    message = frameCount;
  }

   text(message, width / 2, height / 2);
}
