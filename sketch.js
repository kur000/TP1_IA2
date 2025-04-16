let cont;
let colors = ['#e21b1b', '#f2d52e', '#2a3b8e', '#ffffff', '#999999', '#000000'];

function setup() {
  createCanvas(400, 400);
  cont = createGraphics(400, 400);
  
  // Dibujar rectángulos una sola vez
  for (let i = 0; i < 60; i++) {
    let w = random(30, 150);
    let h = random(30, 20);
    let x = random(width/2 + 120);
    let y = random(height/2 + 120);
    let isVertical = random() < 0.5;
    let c = random(colors);
    cont.fill(c);
    cont.noStroke();
    if (isVertical) {
      cont.rect(x, y, w, h);
    } else {
      cont.rect(x, y, h, w);
    }
  }
  
  // Luego, dibujar el círculo grande encima
  cont.noFill();
  cont.stroke(50, 50);
  cont.strokeWeight(20);
  cont.circle(width / 2, height / 2, 340);
}

function draw() {
  background(220);
  image(cont, 0, 0); // Mostrar todo el gráfico
}
