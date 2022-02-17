/**
 * Nihal Karim
 * IGME-102: 5-2 Collection Objects, 2/11/22
 * 
 * Practicing printing collections using different for loops
 * 
 */

"use strict"; //catch some common coding errors

/* Global variables */

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);

   prosPrint();
}

/**
 * draw :
 */
function draw() {

}

function prosPrint() {
   console.log(" *** Object Literals Experiment *** .");

   let pros = {
      "Pro 1": "UX Developer",
      "Pro 2": "Software Engineer",
      "Pro 3": "Senior Front End Developer",
      "Pro 4": "Product Manager",
      "Pro 5": "Technical Artist"
   };

   console.log(" -- 3 part for loop -- ");
   for (let i = 0; i < 5; i++) {
      console.log(Object.keys(pros)[i] + " is a " + Object.values(pros)[i] + " at a big tech company.");
   }

   console.log(" -- for of loop -- ");
   for (let entry of Object.entries(pros)) {
      console.log(entry[0] + " is a " + entry[1] + " at a small tech company.");

   }

   console.log(" -- for in loop -- ");
   for (let proKey in pros) {
      console.log(proKey + " is a " + pros[proKey] + " at a big tech company.");
   }


}