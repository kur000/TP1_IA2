function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  beginShape();
  let spacing = map(mouseX, 0, width, 91, 95);
  for (let a = 0; a < 360; a += spacing) {
    let x = 150 * sin(a) + 200;
    let y = 150 * cos(a) + 200;
    vertex(x, y);
  }
  
  push();
  scale(1.5, 1);
  rotate(45);
  translate(80,-200);
  pop();

  endShape(CLOSE);
}