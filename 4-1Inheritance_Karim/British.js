/**
 * British class : extends Cat class
 */

class British extends Cat {
    constructor(color) {
        super(color);
        this.breed = "British Shorthair"
        this.height = 12; //height in inches
        this.hungry = true; //check if the cat is hungry
    }

    displayMore() {
        if(this.hungry === true) {
            console.log("The " + this.breed + " is hungry.");
        } else {
            console.log("The " + this.breed + " is full.");
        }
        
    }

}