let circleRadius = 20;
let maxRadius = 200;

function setup() {
  createCanvas(640, 480);
  background(190);
  noStroke();
  noLoop();
  colorMode(HSB);
  fill(random(255), 200, 60, 0.5);
}

function draw() {

  for(let i=0;i<12;i++){ 
  circleRadius = random(5, maxRadius);
  circle(random(width), height/2, circleRadius);
  strokeWeight(10);
  stroke(10);
  }

}