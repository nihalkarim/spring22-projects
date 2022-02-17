/**
 * Nihal Karim
 * IGME-102: 4-1 Inheritance Creatures, 2/2/22
 * 
 * look at the console to see the properties/descriptions of the parent class instance
 * and the 3 child classs instances.
 * 
 */

"use strict"; //catch some common coding errors

/* Global variables */
let cat; //general cat from parent class
let british; //british child cat 
let siamese; //siamese child cat
let turkish; //turkish child cat

/**
 * setup : instantiate and display the parent Cat class and the 3 child classes
 */
function setup() {
   createCanvas(400, 400);

   //create instance of Cat class
   cat  = new Cat("purple");
   cat.display();

   //make a british cat
   british = new British("grey");
   british.display();
   british.displayMore();

   //make a siamese cat
   siamese = new Siamese("white");
   siamese.display();
   siamese.displayMore();

   //make a turkish cat
   turkish = new Turkish("orange");
   turkish.display();
   turkish.displayMore();

}

/**
 * draw :
 */
function draw() {
   
}