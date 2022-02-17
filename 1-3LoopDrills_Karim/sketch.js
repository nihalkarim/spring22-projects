/**
 * Nihal Karim
 * IGME-102: 1-3 Loop Drills, 1/14/22
 * 
 * Create myShape function and use it to practice functions
 *
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
	createCanvas(400, 400);
	background("beige");
	rectMode(CENTER);

	//testing the myShape function
	//testShape();

	//LOOP #1 - Draw a row of 10 30px shapes at y=40. Space by 5px
	for(let i = 20; i < 350; i += 35) { //start at i=20 so the shape doesn't go off canvas
		fill("DarkBlue");
		myShape(i, 40, 30);
	}

	//LOOP #2 - Shrink stacked shapes by 40px
	for(let i = 140; i > 0; i -= 40) { 
		fill("HotPink");
		myShape(width/2, 150, i);
	}

	//LOOP #3 - Randomly spaced shapes
	//make randomly spaced hearts appear across canvas at y=250
	for(let i = 20; i < width-20; i += random(50)) { //set 20 <= i < width-20 to create margin
		fill("DarkGreen");
		myShape(i, 250, 20)
	}

	//LOOP #4 - Overlapping Shapes
	for(let i = 0; i < width + 20; i+=40) {
		fill("Red");
		myShape(i, 300, 50);
	}

	//LOOP #5 - Count 10 to -10
	let pX = 10;
	for(let i = 10; i > -11; i--) {
		fill("Blue");
		text(i, pX, 350);
		pX += 18;
	}
}


/**
 * myShape : draw a heart shape made of 2 ellipses and a trianlge
 * @param x {number} x coordinate
 * @param y {number} y coordinate
 * @param number {number} size of the whole shape
 */
function myShape(x, y, size) {
	ellipse(x - size/4, y - size/4, size/2);
	ellipse(x + size/4, y - size/4, size/2);
	triangle(x - size/2, y - size/4, x, y + size/2, x + size/2, y - size/4)
}

/**
 * testShape : test myShape
 */
function testShape() {
	square(50, 50, 15);
	myShape(50, 50, 15);
	square(100, 100, 40);
	myShape(100, 100, 40);
	square(250, 250, 100);
	myShape(250, 250, 100);
}
