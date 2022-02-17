/**
 * Turksish class : extends Cat class
 * The Turkish cat can be energetic or tired. The default state is energetic and does not change at the time.
 */

class Turkish extends Cat {
    constructor(color) {
        super(color);
        this.breed = "Turskish"
        this.energetic = true; //check if the cat is energetic or tired
    }

    display() {
        let x = this.x;
        let y = this.y;
        let size = this.size;

        super.display();
        fill(this.color);
        //determine if the cat is energetic or not and put text w that info on the canvas
        if(this.energetic === true) {
            text("Playful!", x - size/2, y - size);
            //console.log("The " + this.breed + " cat is energetic.");
        } else {
            text("Tired :(", x - size/2, y - size);
            //console.log("The " + this.breed + " cat is tired.");
        }
    }

    onClick() {
        if(mouseIsPressed) {
            this.x += 2 * this.xSpeed;
            this.y += 2 * this.ySpeed;
            if (this.x > width + this.size) {
                this.x = 0 - this.size / 2;
            }
            if (this.y > height + this.size) {
                this.y = 0 - this.size / 2;
            }
        }
    }

}
