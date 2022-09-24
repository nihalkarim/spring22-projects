/**
 * Nihal Karim
 * IGME-102: Project 2, 4/15/22
 * 
 * Use menu options below canvas for different population subsets, different mapping options, to see the county name, and to scale the visualization
 * 
 */

"use strict"; //catch some common coding errors

/* Global variables */
let localities = []; //localities array
let domSelects = {}; //object literal of UI elements

// let popDom; //DOM select menu for population visualization
// let mappingDom; //DOM select menu for demograhic + health visualizations
// let showNames; //DOM checkbox to show locality names
// let scaleDom; //DOM slider to scale the map (range 1-5);

/**
 * setup : create the canvas, set up modes, load JSON file, and call the DOM select menu
 */
function setup() {
	createCanvas(1500, 1200);
	//createCanvas(1200, 960); //used for my own purposes bc it's easier to see on my laptop
	background("AliceBlue");
	angleMode(DEGREES);
	rectMode(CENTER);
	colorMode(RGB, 255, 255, 255, 1);
	textSize(24);

	loadJSON('PlacesHealthLocalities.json', readLocalities); //load JSON file & call callback func

	domSelects.legends = loadImage("media/p2-legend-1.png");

	domManager(); //call dom manager func

}

/**
 * readLocalities : callback function; loads the json file into the localities array and calls the updateViz function
 * @param dataArray : JSON data array
 */
function readLocalities(dataArray) {
	//load file into localties array
	for (let i = 0; i < dataArray.length; i++) {
		localities[i] = new Locality(dataArray[i]);
	}
	updateViz();
}

/**
 * updateViz : displays the locality data onto the canvas.
 * If the localities array is empty, prints "Waiting to load data"
 */
function updateViz() {
	//local array of localities for filtering
	let drawLoc = localities;

	image(domSelects.legends, 500, 500, 500, 500);

	//filter local array when population menu option is changed
	switch (domSelects.popDom.value()) {
		//filter localities array to only include cities w/ <150k pop 
		case "Population <150k":
			drawLoc = localities.filter(location => location["population"] < 150000);
			break;
		//filter localities array to only include cities w/ >150k pop 
		case "Population >150k":
			drawLoc = localities.filter(location => location["population"] > 150000);
			break;
		case ">30% non-white":
			drawLoc = localities.filter(location => ((location["population"] - location["white"]) / location["popStudied"]) > 0.3);
			break;
	}

	//filter local array when health + demographic menu option is changed
	//[[[I triedd to use this for image loading but it didn't work]]]
	switch (domSelects.mappingDom.value()) {
		//filter localities array to only include cities w/ <150k pop 
		case "Map depression, <7hrs of sleep, and median income":
			//domSelects.legends[0] = loadImage("media/p2-legend-1.png");
			//image(domSelects.legends[0], width*.7, height*0.05);
			break;
		//filter localities array to only include cities w/ >150k pop 
		case "Map no health insurance, whiteness, annual checkup, and diabetes":
			//domSelects.legends[1] = loadImage("media/p2-legend-2.png");
			break;
		case "Map current smoking and asthma":
			//domSelects.legends[2] = loadImage("media/p2-legend-3.png");
			break;
		case "Map obesity, high cholesterol, and heart disease":
			//domSelects.legends[3] = loadImage("media/p2-legend-4.png");
			break;
	}

	//display local array if it's not empty
	if (drawLoc.length > 0) {
		background("AliceBlue");
		drawLoc.forEach(function (loc) {
			loc.display()
		});
	} else {
		text("Waiting to load data...", width / 2, height / 2);
	}
}

/**
 * domManager : manage creation of DOM labels and controls
 * 
 */
function domManager() {
	//create the select option for the population subsets
	domSelects["popDom"] = createSelect();
	domSelects.popDom.option("All localities");
	domSelects.popDom.option("Population <150k");
	domSelects.popDom.option("Population >150k");
	domSelects.popDom.option(">30% non-white");
	domSelects.popDom.changed(updateViz);

	//create the select option for the variable mapping options
	domSelects["mappingDom"] = createSelect();
	domSelects.mappingDom.option("Map depression, <7hrs of sleep, and median income");
	domSelects.mappingDom.option("Map no health insurance, whiteness, annual checkup, and diabetes");
	domSelects.mappingDom.option("Map current smoking and asthma");
	domSelects.mappingDom.option("Map obesity, high cholesterol, and heart disease");
	domSelects.mappingDom.changed(updateViz);

	//checkbox to see the county name
	domSelects["showNames"] = createCheckbox("Show locality name", false);
	domSelects.showNames.changed(updateViz);

	//scale --> does not work right now
	domSelects["scaleDom"] = createSlider(1, 5, 1, 0);

}

