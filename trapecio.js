let colors = ['#e21b1b', '#f2d52e', '#2a3b8e', '#eeeeee', '#999999', '#111111'];

class Trapecio{
    constructor() {
        //coordenadas x del trapecio
        this.x1 = 0;
        this.x2 = random(4);
        this.x3 = random(100);
        this.x4 = this.x3 + random (3);
        //coordenadas y del trapecio
        this.y1 = 0;
        this.y2 = random(100, 250);
        this.y3 = this.y2 + random(3);
        this.y4 = 0;
        //relleno random (dentro del array colors) para cada trapecio
        this.relleno = random(colors);
    }

    dibujar(){
        beginShape();
        vertex(this.x1, this.y1);
        vertex(this.x2, this.y2);
        vertex(this.x3, this.y3);
        vertex(this.x4, this.y4);
        endShape(CLOSE);
        fill(this.relleno);
    }
}