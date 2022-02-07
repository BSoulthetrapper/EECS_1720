let x = 200;
let tSize = 22;
let button3, button5;

function setup() {
  createCanvas(400, 500);
  createP('');
  
  
  button3 = createButton('BIGGER');
  button3.position(0, 560);
  button3.size(100, 30);
  button3.mouseReleased(bic)
  
  button5 = createButton('SMALLER');
  button5.position(300, 560);
  button5.size(100, 30);
  button5.mouseReleased(small)
  

function bic(){
  tSize+=2;
}

function small(){
  tSize-=2;
}
}

function draw(){
  background(150, 150, 150, 3);
  textSize(tSize)
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  noStroke();
  if(mouseIsPressed){
    text('OMG', mouseX, mouseY)
  }
}
