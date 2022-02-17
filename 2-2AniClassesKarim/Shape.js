class Shape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    display() {
        ellipse(this.x - this.size/4, this.y - this.size/4, this.size/2);
	    ellipse(this.x + this.size/4, this.y - this.size/4, this.size/2);
	    triangle(this.x - this.size/2, this.y - this.size/4, 
                 this.x, this.y + this.size/2, 
                 this.x + this.size/2, this.y - this.size/4)
    }

    update() {
        for(let i = 140; i > 0; i -= 40) { 
            fill("HotPink");
            this.display()
        }
    }

}