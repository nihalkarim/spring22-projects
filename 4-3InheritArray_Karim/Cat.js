/**
 * Cat class : parent class with the shared properties and display method. 
 * This class sets up the size, location, colour, andd breed of the cats. 
 * The display draws out the cat's head/face.
 */

class Cat {

    constructor(color) {
        this.size = random(25, 100);
        this.x = random(this.size * 1.1, width - this.size * 1.1); //random x loc
        this.y = random(this.size * 1.1, height - this.size * 1.1); //random y loc
        this.color = color;
        this.breed = "Imaginary";
    
    }

    display() {
        let x = this.x;
        let y = this.y;

        //OUTER EARS
        fill(this.color);
        //left ear
        triangle(x - (0.45 * this.size), y - (0.2 * this.size), 
                 x - (0.55 * this.size), y - (0.75 * this.size), 
                 x - (0.1 * this.size), y - (0.49 * this.size));
        //right ear
        triangle(x + (0.45 * this.size), y - (0.2 * this.size), 
                 x + (0.55 * this.size), y - (.75 * this.size), 
                 x + (0.1 * this.size), y - (0.49 * this.size));

        //INNER EAR PART
        stroke(0.5);
        fill("pink");
        //left ear
        triangle(x - (0.4 * this.size), y - (0.15 * this.size), 
                 x - (0.47 * this.size), y - (0.65 * this.size), 
                 x - (0.1 * this.size), y - (0.44 * this.size));
        //right ear
        triangle(x + (0.4 * this.size), y - (0.15 * this.size), 
                 x + (0.47 * this.size), y - (0.65 * this.size), 
                 x + (0.1 * this.size), y - (0.44 * this.size));

        //head
        fill(this.color);
        noStroke();
        ellipse(x, y, this.size);

        //eyes
        fill("blue");
        ellipse(x - this.size/6, y - this.size/10, this.size/15, this.size/8); //left
        ellipse(x + this.size/6, y - this.size/10, this.size/15, this.size/8); //right
        //nose
        ellipse(x, y + this.size/10, this.size/8, this.size/15);
        //mouth
        noFill();
        stroke("blue");
        arc(x - this.size/6, y + this.size/10, this.size/3, this.size/3, 0, HALF_PI + QUARTER_PI);
        arc(x + this.size/6, y + this.size/10, this.size/3, this.size/3, QUARTER_PI, PI);
        noStroke();
        
        
	}

}