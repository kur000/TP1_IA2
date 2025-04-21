let width = 400;
let height = 400;
let t = [];
let cant = 60;
let mascara; //utilizare esta variable para crear una mascara de capa que esconda todo lo que exceda el margen de mi circulo central

function setup() {
  createCanvas(width, height);
  //creo los objetos
  for(i=0; i<cant; i++){
    t[i] = new Trapecio();
  }
  noStroke();
  //creo la mascara de capa
  mascara = createGraphics(width, height);
  //fondo blanco para esta capa
  mascara.background(255);
  //uso este metodo para que en lugar de dibujar un circulo sobre la capa virtual, "borre" esa area 
  mascara.erase();
  mascara.ellipse(width / 2, height / 2, width - 50, height - 50); // circulo transparente
  //vueelvo al modo regular de trabajo
  mascara.noErase();

}

function draw() {
  background(255);

  push();
  //translate(width/2-100, height/2-100);
  for(i=0; i<cant; i++){
    t[i].dibujar();
  }
  pop();
  //dibujo la mascara
  image(mascara, 0, 0);


  //dibujo el mismo circulo de la mascara para que luzca como una ventana 
  push();
  noFill();
  stroke(0);
  strokeWeight(5);
  ellipse(width/2, height/2, width - 50, height - 50);
  pop();
  //noLoop();
}

function keyPressed() {
  for(i=0; i<cant; i++) {
    t[i].cambiarColor();
  }
}