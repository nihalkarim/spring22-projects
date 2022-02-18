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
	for (let i = 0; i < 5; i++) {
		creatures[i] = getNewCreature();
	}
	console.log(creatures); //use the console to print the cat info

	//DOM element: selection menu
	menu = createSelect();
	menu.option(" --- :) --- ")
	menu.option("Basic Click-Method");
	menu.option("Turkish Cat Click-Method");
	menu.option("Generate New");
	menu.option("Replace");
	menu.option("Delete");

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
	let storedIndex;
	for (let i = 0; i < creatures.length; i++) {
		if (creatures[i].within(mouseX, mouseY) === true) {
			//store creature's index
			storedIndex = creatures.indexOf(creatures[i]);
			console.log(storedIndex);
		}
	}

	//Generate new creature 
	//  FINISH
	if (menu.value() === "Generate New") {
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

	//Bacic click triggered method 
	// TO DO
	if (menu.value() === "Basic Click-Method") {
		console.log(creatures[storedIndex]);
		creatures[storedIndex].onClick();
		
		// for (let item of creatures) {
		// 	if(item != "Turkish") {
		// 		item.onClick();
		// 		console.log("working")
		// 	}
		// }
		//implement the basic click-triggered method for the parent and derived classes (not Turkish)
	}

	//Special click triggered method 
	// TO DO
	if (menu.value() === "Turkish Cat Click-Method") {

	}

	//Replace creature
	if (menu.value() === "Replace") {
		//variables storing the x & y coordinates of the cat that was clicked on
		let foundX = creatures[storedIndex].x; 
		let foundY = creatures[storedIndex].y;

		//remove the cat that was clicked on and replace with a new cat
		creatures.splice(storedIndex, 1, getNewCreature());
		
		//place the new cat at the x,y coordinates of the cat it is replacing
		creatures[storedIndex].x = foundX;
		creatures[storedIndex].y = foundY;
	}

	//DELETE option
	if (menu.value() === "Delete") {
		//delete the creature that was clicked on
		creatures.splice(storedIndex, 1);
		console.log(creatures);

	}
	



}


/** 
 * mouseClicked() function:
 * 
 * a. constrained within canvas
 * b. not working?
 */
