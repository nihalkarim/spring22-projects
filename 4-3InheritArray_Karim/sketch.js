/**
 * Nihal Karim
 * IGME-102: 4-3 Inheritance Creatures, 2/xx/22
 * 
 * The cats with the text above their head are the derived classes.
 * The cat with nothing above its head it the parent class.
 * 
 */

"use strict"; //catch some common coding errors


/* Global variables */
let cat; //general cat from parent class
let british; //british child cat 
let siamese; //siamese child cat
let turkish; //turkish child cat
let creatures = []; //creatures array

/**
 * setup : set up background and initial values. Test getNewCreatures and fill the creatures array with new cats
 */
function setup() {
	createCanvas(400, 400);
	background("LightBlue")
	noStroke();

	console.log(getNewCreature(), getNewCreature(), getNewCreature()); //testing getNewCreature()

	//fill creatures array with 7 random cats
	for(let i = 0; i < 7; i++) {
		creatures[i] = getNewCreature();
	}
	console.log(creatures); //use the console to print the cat info
}

/**
 * draw : display the creatures
 */
function draw() {
	for(let item of creatures) {
		item.display();
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

	if(randNum < 1) {
		creature = new British(chosenColor); //british cat
	} else if(randNum < 2) {
		creature = new Turkish(chosenColor); //turkish cat
	} else if(randNum < 3) {
		creature = new Siamese(chosenColor); //siamese cat
	} else {
		creature = new Cat(chosenColor); //parent class Cat
	}
	return creature;
}

