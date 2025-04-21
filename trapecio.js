let colores = ['#e21b1b', '#f2d52e', '#2a3b8e', '#eeeeee', '#999999', '#111111'];



class Trapecio{
    constructor() {

        //coordenadas x del trapecio
        this.x1 = 0;
        this.x2 = random(4);
        this.x3 = random(100);
        this.x4 = this.x3 + random (3);
        //coordenadas y del trapecio
        this.y1 = 0;
        this.y2 = random(1250, 300);
        this.y3 = this.y2 + random(3);
        this.y4 = 0;
        //relleno random (dentro del array colores) para cada trapecio
        this.relleno = random(colores);
        //valor randomizado que usaremos como booleano para rotar algunos trapecios
        this.isVertical = random() < .5;
        // creamos un vector para randomizar el origen de los objetos trapecio creados
        this.pos = createVector(random(width), random(height)); 
        
    }

    dibujar(){
        fill(this.relleno);
        push();
        if (this.isVertical) {
            //trasladamos y rotamos el origen de coordenadas del objeto
            translate(this.pos.x,this.pos.y);
            rotate(HALF_PI)            
        }
        //dibujamos el trapecio
        beginShape();
        vertex(this.x1, this.y1);
        vertex(this.x2, this.y2);
        vertex(this.x3, this.y3);
        vertex(this.x4, this.y4);
        endShape(CLOSE);
        pop();
    }

    info(){
        console.log(this.isVertical);
    }

    cambiarColor(){
        //prueba de cambio de posicion
        this.pos = createVector(random(width), random(height)); 
        this.relleno = random(colores);
    }
    
}