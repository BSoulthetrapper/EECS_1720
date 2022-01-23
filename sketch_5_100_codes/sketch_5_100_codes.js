function setup() {
createCanvas(640,360);
}


function draw() {
ellipseMode(RADIUS);
fill(random(255));
ellipse(60, 60, 50, 50); 
ellipseMode(CENTER);
fill(random(255),random(255),random(255));
ellipse(60, 60, 50, 50);
}
