/**
 * British class : extends Cat class
 * The British cat can be hungry or full. The default state is Hungry and does not change at the time.
 */

class British extends Cat {
    constructor(color) {
        super(color);
        this.breed = "British Shorthair"
        this.hungry = true; //check if the cat is hungry
    }

    display() {
        //display parent class coords
        super.display();

        fill(this.color);
        //determine if the cat is hungry or not and put text w that info on the canvas
        if(this.hungry === true) {
            text("Hungry!", this.x - this.size/2, this.y - this.size);
            //console.log("The " + this.breed + " is hungry.");
        } else { 
            text("Full!", this.x - this.size/2, this.y - this.size); 
            //console.log("The " + this.breed + " is full.");
        }
        
    }

}