/**
 * Nihal Karim
 * IGME-102: Nihal Karim, 01/24/22
 * 
 * 
 * Description and interaction instructions
 * 
 */

"use strict"; //catch some common coding errors

/* Global variables */
let label; //label class instance
let shape; //animated shape class instance


/**
 * setup : 
 */
function setup() {
	createCanvas(400, 400);
	textSize(100);
	textAlign(CENTER);

	label = new Label();

	noStroke();
	fill("LightPink");
	shape = new Shape(width/2, height/2, 50);

}

/**
 * draw :
 */
function draw() {
	background("AliceBlue");
	label.display();
	shape.display();
	shape.update();

}

/**
 * mouseClicked :
 */
function mouseClicked() {
	label.flipIfNear(mouseX, mouseY);
}