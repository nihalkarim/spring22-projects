/**
 * Nihal Karim
 * IGME-102: Project 1 - Abstract Menagerie, 2/18/22
 * 
 * The cats with the text above their head are the derived classes.
 * The cat with nothing above its head it the parent class.
 * 
 */

"use strict"; //catch some common coding errors


/* Global variables */
let creatures = []; //creatures array
let menu;

/**
 * setup : set up background and initial values. Test getNewCreatures and fill the creatures array with new cats
 */
function setup() {
	createCanvas(500, 500);
	noStroke();

	//fill creatures array with 7 random cats
	for (let i = 0; i < 15; i++) {
		creatures[i] = getNewCreature();
	}
	console.log(creatures); //use the console to print the cat info

	//DOM element: selection menu
	menu = createSelect();
	menu.option("Basic Click-Method");
	menu.option("Turkish Cat Click-Method");
	menu.option("Generate New Creature");
	menu.option("Replace Creature");
	menu.option("Delete Creature");

}

/**
 * draw : display the creatures
 */
function draw() {
	background("LightBlue");
	for (let item of creatures) {
		item.display();
		item.move();
		// item.within();
		// item.onClick();
	}

}

/**
 * getNewCreature : create a new creature from the parent or derived classes with random colour and size 
 * return : creature
 */
function getNewCreature() {
	let creature = null;
	let colorArray = ["white", "orange", "black", "purple", "grey"];
	let chosenColor = random(colorArray);
	let randNum = random(5);

	if (randNum < 1) {
		creature = new British(chosenColor); //british cat
	} else if (randNum < 2) {
		creature = new Turkish(chosenColor); //turkish cat
	} else if (randNum < 3) {
		creature = new Siamese(chosenColor); //siamese cat
	} else {
		creature = new Cat(chosenColor); //parent class Cat
	}
	return creature;
}

/**
 * mouseClicked : create a new creature from the parent or derived classes with random colour and size 
 * return : creature
 */
function mouseClicked() {
	for (let item of creatures) {
		if (item.within(mouseX, mouseY) === true) {
			//store index
		}
	}

	if (menu.value() === "Generate New Creature") {
		///create new creature at mouse coordinates
		creatures.push(getNewCreature());
		creatures[creatures.length - 1].x = mouseX;
		creatures[creatures.length - 1].y = mouseY;

		// //if mouse is not within canvas, generate new creature in the middle of the canvas
		// if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		// 	creatures[creatures.length - 1].x = mouseX;
		// 	creatures[creatures.length - 1].x = mouseY;
		// } else {
		// 	creatures[creatures.length - 1].x = width / 2;
		// 	creatures[creatures.length - 1].y = height / 2;
		// }
		console.log(creatures[creatures.length - 1]);
		console.log(creatures);
	}
}


/**
 * movement style: wrap 
 * >>> include speed
 * 
 * click triggered method: change night vs day on click
 * 
 * click-triggered method for ONE of the cats??
 */
