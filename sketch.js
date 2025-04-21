let t = [];
let cant = 30;

function setup() {
  createCanvas(400, 400);
  background(255);
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
    t[i].info();
  }
  pop();
  noLoop();
}