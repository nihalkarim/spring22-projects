/**
 * Nihal Karim
 * IGME-102: Day 1 Review Exercise, 01/10/22
 * 
 * 3 shapes, 3 global vars, 1 event handler
 */

"use strict"; //catch some common coding errors

/* Global variables */
let red = 255;
let green = 255;
let blue = 255;

/**
 * setup :
 */
function setup() {
   createCanvas(600, 600);
   noStroke();
}

/**
 * draw :
 */
function draw() {
   background("AliceBlue");

   let y = height / 2;

   for (let i = 0; i <= 255; i++) {
      fill(red, 0, 0);
      circle(100, y, 50);
      red--;

      fill(0, green, 0);
      square(250, y - 25, 50);
      green--;

      fill(0, 0, blue);
      triangle(475, y + 25, 500, y - 25, 525, y + 25)
      blue--;

      if (red < 0) {
         red = 255;
      }
      if (blue < 0) {
         red = 255;
      }
      if (green < 0) {
         red = 255;
      }
   }
}

/**
 * keyPressed :
 */
 function keyPressed() {

}