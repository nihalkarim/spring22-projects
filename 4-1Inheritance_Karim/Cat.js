/**
 * Cat class : parent class with the shared properties and display method
 */

class Cat {

    constructor(color) {
        this.color = color;
        this.breed = "Imaginary";
        this.height = 500;
        
        //testing
        console.log("Made a " + color + " cat :D")
    }

    display() {
		console.log("The " + this.color + " cat is a " + 
					this.breed + " cat and it's " + this.height + " inches tall.")
	}

}