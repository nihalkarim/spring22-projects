/**
 * Cat class : parent class with the shared properties and display method. 
 * This class sets up the size, location, colour, andd breed of the cats. 
 * The display draws out the cat's head/face.
 */

class Cat {

	constructor(color) {
		this.size = random(25, 100);
		//this.size = 100;
		this.x = random(this.size * 1.1, width - this.size * 1.1); //random x loc
		this.y = random(this.size * 1.1, height - this.size * 1.1); //random y loc
		this.color = color;
		this.breed = "Imaginary";
		this.xSpeed = random(2, 5);
		this.ySpeed = random(2);

	}

	display() {
		let x = this.x;
		let y = this.y;
		let size = this.size;

		//OUTER EARS
		fill(this.color);
		//left ear
		triangle(x - (0.45 * size), y - (0.2 * size),
			x - (0.55 * size), y - (0.75 * size),
			x - (0.1 * size), y - (0.49 * size));
		//right ear
		triangle(x + (0.45 * size), y - (0.2 * size),
			x + (0.55 * size), y - (.75 * size),
			x + (0.1 * size), y - (0.49 * size));
		
		//INNER EAR PART
		stroke(0.5);
		fill("pink");
		//left ear
		triangle(x - (0.4 * size), y - (0.15 * size),
			x - (0.47 * size), y - (0.65 * size),
			x - (0.1 * size), y - (0.44 * size));
		//right ear
		triangle(x + (0.4 * size), y - (0.15 * size),
			x + (0.47 * size), y - (0.65 * size),
			x + (0.1 * size), y - (0.44 * size));
		noStroke();

		//head
		fill(this.color);
		ellipse(x, y, size);
		//eyes
		fill("blue");
		ellipse(x - size / 6, y - size / 10, size / 15, size / 8); //left
		ellipse(x + size / 6, y - size / 10, size / 15, size / 8); //right
		//nose
		ellipse(x, y + size / 10, size / 8, size / 15);
		//mouth
		noFill();
		stroke("blue");
		arc(x - size / 6, y + size / 10, size / 3, size / 3, 0, HALF_PI + QUARTER_PI);
		arc(x + size / 6, y + size / 10, size / 3, size / 3, QUARTER_PI, PI);
		noStroke();

	}

	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if (this.x > width + this.size) {
			this.x = 0 - this.size / 2;
		}
		if (this.y > height + this.size) {
			this.y = 0 - this.size / 2;
		}
	}

	within(x, y) {
		let size = this.size;
		if (x > this.x - size / 2 && x < this.x + size / 2) {
			if (y > this.y - size / 2 && y < this.y + size / 2) {
				return true;
			}
		} else {
			return false;
		}
	}

	onClick() {
		let x = this.x;
		let y = this.y;
		let size = this.size;
		//when mouse is clicked, make the cat angry
		if (mouseIsPressed) {
			//make the eyes red
			fill("red");
			stroke("white");
			ellipse(x - size / 6, y - size / 10, size / 12, size / 6); //left
			ellipse(x + size / 6, y - size / 10, size / 12, size / 6); //right
			noStroke();

			//add teeth
			fill("white");
			stroke("black");
			strokeWeight(.5);
			triangle(x - 0.2 * size, y + 0.27 * size,
				x - 0.15 * size, y + 0.37 * size,
				x - 0.1 * size, y + 0.25 * size); //left
			triangle(x + 0.2 * size, y + 0.27 * size,
				x + 0.15 * size, y + 0.37 * size,
				x + 0.1 * size, y + 0.25 * size); //right
			noStroke();

			//mouth
			noFill();
			stroke("blue");
			strokeWeight(size/70);
			arc(x - size / 6, y + size / 10, size / 3, size / 3, 0, HALF_PI + QUARTER_PI);
			arc(x + size / 6, y + size / 10, size / 3, size / 3, QUARTER_PI, PI);
			noStroke();

		}

	}
}