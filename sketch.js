let t = [];
let cant = 19;

function setup() {
  createCanvas(400, 400);
  background(0);
  stroke(255);
  for(i=0; i<cant; i++){
    t[i] = new Trapecio();
  }
  noStroke();
}

function draw() {
  push();
  //translate(width/2-100, height/2-100);
  for(i=0; i<cant; i++){
    t[i].dibujar();
  }
  pop();
}