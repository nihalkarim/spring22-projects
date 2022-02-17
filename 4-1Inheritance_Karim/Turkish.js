/**
 * Turksish class : extends Cat class
 */

class Turkish extends Cat {
    constructor(color) {
        super(color);
        this.breed = "Turskish"
        this.height = 9; //height in inches
        this.energetic = true; //check if the cat is energetic or tired
    }

    displayMore() {
        if(this.energetic === true) {
            console.log("The " + this.breed + " cat is energetic.");
        } else {
            console.log("The " + this.breed + " cat is tired.");
        }
    }

}