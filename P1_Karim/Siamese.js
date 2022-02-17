/**
 * Siamese class : extends Cat class
 * The Siamese cat can have long or short fur. The default state is short and does not change at the time.
 */

class Siamese extends Cat {
    constructor(color) {
        super(color);
        this.breed = "Siamese"
        this.shortFur = true; //check if the fur is long or short
    }

    display() {
        super.display();
        fill(this.color);
        //determine if the cat needs a haircut or not and put text w that info on the canvas
        if(this.shortFur === true) {
            text("New haircut!", this.x - this.size/2, this.y - this.size);
            //console.log("The " + this.breed + " has short fur.");
        } else {
            text("Too furry", this.x - this.size/2, this.y - this.size);
            //console.log("The " + this.breed + " cat's fur is too long.");
        }
    }

}