/**
 * Siamese class : extends Cat class
 */

class Siamese extends Cat {
    constructor(color) {
        super(color);
        this.breed = "Siamese"
        this.height = 14; //height in inches
        this.shortFur = true; //check if the fur is long or short
    }

    displayMore() {
        if(this.shortFur === true) {
            console.log("The " + this.breed + " has short fur.");
        } else {
            console.log("The " + this.breed + " cat's fur is too long.");
        }
    }

}