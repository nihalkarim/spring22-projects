class Locality {
    constructor(loc) {
        //make the locality instance have the same properties as the localities
        for (let prop in loc) {
            this[prop] = loc[prop];
            //if the propery is a number then convert to Number
            if (Number(this[prop])) {
                this[prop] = Number(this[prop]);
            }
        }

        //use this.x and this.y for longitude andd latitude
        if (this.state === "United States") {
            //the US goes in the top right of the canvas
            this.x = width * 0.75;
            this.y = 100;
        } else {
            //remap the longitude and latitude into this.x and this.y to the canvas size
            this.x = map(this.lon, -164.033, -67.629, 0, width * 0.95);
            this.y = map(this.lat, 69.312, 19.601, 0, height * 0.95);
            //move/compress Alaska to the toop left and Hawaii to hte bottom left
            if (this.state === "Alaska") {
                //remap the Alaska longitude and latitude into this.x and this.y to the top left of the canvas
                this.x = map(this.lon, -164.033, -67.629, width * 0.05, width * 0.4);
                this.y = map(this.lat, 69.312, 19.601, height * 0.05, height * 0.3);
            }
            if (this.state === "Hawaii") {
                //remap the Alaska & Hawaii longitude and latitude into this.x and this.y to the bottom left of the canvas
                this.x = map(this.lon, -164.033, -67.629, width * 0.05, width * 0.4);
                this.y = map(this.lat, 69.312, 19.601, height * 0.7, height * 0.95);
            }
        }
    }

    display() {
        //noStroke();

        //different display options based on DOM menu selection
        if (domSelects.mappingDom.value() === "Map depression, <7hrs of sleep, and median income") {
            this.incomeDisplay();
        } else if (domSelects.mappingDom.value() === "Map no health insurance, whiteness, annual checkup, and diabetes") {
            this.healthDisplay();
        } else if (domSelects.mappingDom.value() === "Map current smoking and asthma") {
            this.smokeDisplay();
        } else if (domSelects.mappingDom.value() === "Map obesity, high cholesterol, and heart disease") {
            this.heartDisplay();
        }

        //display county name
        if (domSelects.showNames.checked()) {
            this.nameDisplay();
        }

        //population pie chart
        let [studied, population, white] = [this.popStudied, this.population, this.white];
        let startVal = 0;
        let range = 0; // % of studie should scale to % of 360º

        fill(0);
        text("White vs Non White", 150, height / 2 - 100);
        //white
        range = 360 * (white / studied);
        //fill(random(255), random(255), random(255));
        fill("green");
        arc(250, height / 2 + 100, 300, 300, startVal, startVal + range);
        startVal += range;
        //non white
        range = 360 * ((population - white) / studied);
        //fill(random(255), random(255), random(255));
        fill("blue");
        arc(250, height / 2 + 100, 300, 300, startVal, startVal + range);
        startVal += range;


        resetMatrix();
    }

    incomeDisplay() {
        //display the visualization of depression, <7hrs of sleep, and median income
        //median income determines size; % of depression & <7hrs of sleep determine colour opacity
        translate(0, 0);
        noStroke();
        let circleSize; // width of the arc for the half circle
        let colOp; //color opacity

        //image(domSelects.legends[0], width*.7, height*0.05);
        //console.log()


        //bigger median income will have a larger circle size
        if (this.medianIncome < 35000) {
            circleSize = width / 225;
        } else if (this.medianIncome > 35000 && this.medianIncome < 75000) {
            circleSize = width / 175;
        } else if (this.medianIncome > 75000 && this.medianIncome < 115000) {
            circleSize = width / 125;
        } else if (this.medianIncome > 115000 && this.medianIncome < 150000) {
            circleSize = width / 75;
        }

        //depression visualisation: higher % --> darker arc {10-35%}
        if (this.outcomes.Depression <= 10) {
            colOp = .6;
        } else if (this.outcomes.Depression > 10 && this.outcomes.Depression <= 20) {
            colOp = .8;
        } else if (this.outcomes.Depression > 20 && this.outcomes.Depression <= 35) {
            colOp = 1;
        }
        fill(255, 0, 255, colOp);
        arc(this.x, this.y, circleSize, circleSize, -45, 135);

        //<7hrs of sleep visualisation: higher % --> darker arc {25-50%}
        if (this.risks["Sleep <7 hours"] <= 30) {
            colOp = .6;
        } else if (this.risks["Sleep <7 hours"] > 30 && this.risks["Sleep <7 hours"] <= 40) {
            colOp = .8;
        } else if (this.risks["Sleep <7 hours"] > 40 && this.risks["Sleep <7 hours"] <= 50) {
            colOp = 1;
        }
        fill(50, 255, 30, colOp);
        arc(this.x, this.y, circleSize, circleSize, 135, -45);

        resetMatrix();
    }

    smokeDisplay() {
        //display the visualization of smoking and asthma
        //both variables determine the size of their respective arc/half-circle
        //difference in size determines correlation
        translate(0, 0);
        noStroke();
        let circleSize;

        //higher smoking percentage will have a larger circle size {0-50%}
        if (this.risks["Current Smoking"] < 15) {
            circleSize = width / 225;
        } else if (this.risks["Current Smoking"] > 15 && this.risks["Current Smoking"] <= 30) {
            circleSize = width / 175;
        } else if (this.risks["Current Smoking"] > 30 && this.risks["Current Smoking"] <= 40) {
            circleSize = width / 125;
        } else if (this.risks["Current Smoking"] > 40 && this.risks["Current Smoking"] <= 50) {
            circleSize = width / 75;
        }
        fill(0, 75, 255, .7);
        arc(this.x, this.y, circleSize, circleSize, -45, 135);

        //higher asthma percentage will have a larger circle size {7-14% => 0-15%}
        if (this.outcomes["Current Asthma"] < 3) {
            circleSize = width / 225;
        } else if (this.outcomes["Current Asthma"] > 3 && this.outcomes["Current Asthma"] <= 7) {
            circleSize = width / 175;
        } else if (this.outcomes["Current Asthma"] > 7 && this.outcomes["Current Asthma"] <= 12) {
            circleSize = width / 125;
        } else if (this.outcomes["Current Asthma"] > 12 && this.outcomes["Current Asthma"] <= 15) {
            circleSize = width / 75;
        }
        fill(255, 75, 100, .7);
        arc(this.x, this.y, circleSize, circleSize, 135, -45);

        resetMatrix();
    }

    heartDisplay() {
        //display the visualization of obesity, high cholesterol, and heart disease
        //heart disease % determines opacity; oobesity & high cholesterol % determine arc/half circle size
        translate(0, 0);
        strokeWeight(0.5);
        let circleSize; // width of the arc for the half circle
        let colOp; //color opacity


        //higher heart disease % will have a darker circle {3-12% => 0-15%} 
        if (this.outcomes["Coronary Heart Disease"] <= 5) {
            colOp = .6;
        } else if (this.outcomes["Coronary Heart Disease"] > 5 && this.outcomes["Coronary Heart Disease"] <= 10) {
            colOp = .8;
        } else if (this.outcomes["Coronary Heart Disease"] > 10 && this.outcomes["Coronary Heart Disease"] <= 15) {
            colOp = 1;
        }

        //higher cholesterol % will have a larger arc size {20-40% => 0-45}
        if (this.outcomes["High Cholesterol"] <= 15) {
            circleSize = width / 225;
        } else if (this.outcomes["High Cholesterol"] > 15 && this.outcomes["High Cholesterol"] <= 25) {
            circleSize = width / 175;
        } else if (this.outcomes["High Cholesterol"] > 25 && this.outcomes["High Cholesterol"] <= 35) {
            circleSize = width / 125;
        } else if (this.outcomes["High Cholesterol"] > 35 && this.outcomes["High Cholesterol"] <= 45) {
            circleSize = width / 75;
        }
        stroke(125, 35, 255);
        fill(100, 10, 255, colOp);
        arc(this.x, this.y, circleSize, circleSize, -45, 135);

        //higher obesity % will have a larger arc size {16-55% => 0-60%}
        if (this.outcomes["Obesity"] <= 20) {
            circleSize = width / 225;
        } else if (this.outcomes["Obesity"] > 20 && this.outcomes["Obesity"] <= 35) {
            circleSize = width / 175;
        } else if (this.outcomes["Obesity"] > 35 && this.outcomes["Obesity"] <= 45) {
            circleSize = width / 125;
        } else if (this.outcomes["Obesity"] > 45 && this.outcomes["Obesity"] <= 60) {
            circleSize = width / 75;
        }
        stroke(175, 255, 175);
        fill(150, 255, 150, colOp);
        arc(this.x, this.y, circleSize, circleSize, 135, -45);

        noStroke();

        resetMatrix();
    }

    healthDisplay() {
        //display the visualization of health insurance, annual checkup, diabetes, and white population
        //white pop % determines saturation
        //health insurance & annual checkup determine triangle height
        //diabetes % determines triangle width
        translate(0, 0);
        noStroke();
        let satur; //colour saturation of white pop
        let triWidth; //triangle width
        let triHeight; //triangle height
        let whitePercent = (this.white / this.population) * 100; //percentage of white population


        //higher white population % will have a higher colour saturation
        if (whitePercent <= 25) {
            satur = round(random(0, 64));
        } else if (whitePercent > 25 && whitePercent <= 50) {
            satur = round(random(64, 128));
        } else if (whitePercent > 50 && whitePercent <= 75) {
            satur = round(random(128, 192));
        } else if (whitePercent > 75 && whitePercent <= 100) {
            satur = round(random(192, 256));
        }

        //higher diabetes % will have a wider triangle {0-25% range}
        if (this.outcomes["Diabetes"] <= 10) {
            triWidth = width / 225;
        } else if (this.outcomes["Diabetes"] > 10 && this.outcomes["Diabetes"] <= 15) {
            triWidth = width / 175;
        } else if (this.outcomes["Diabetes"] > 15 && this.outcomes["Diabetes"] <= 20) {
            triWidth = width / 125;
        } else if (this.outcomes["Diabetes"] > 20 && this.outcomes["Diabetes"] <= 25) {
            triWidth = width / 75;
        }

        //higher insurance % will have a taller/longer triangle {0-60%}
        if (this.preventions["Health Insurance"] <= 20) {
            triHeight = width / 225;
        } else if (this.preventions["Health Insurance"] > 20 && this.preventions["Health Insurance"] <= 35) {
            triHeight = width / 175;
        } else if (this.preventions["Health Insurance"] > 35 && this.preventions["Health Insurance"] <= 45) {
            triHeight = width / 125;
        } else if (this.preventions["Health Insurance"] > 45 && this.preventions["Health Insurance"] <= 60) {
            triHeight = width / 75;
        }
        //console.log(satur);
        fill(satur, 50, satur, .7);
        triangle(
            this.x - triWidth / 2, this.y,
            this.x + triWidth / 2, this.y,
            this.x, this.y - triHeight,
        )

        //higher annual checkup % will have a taller/longer triangle {60-83% => 60-100%}
        if (this.preventions["Annual Checkup"] <= 60) {
            triHeight = width / 225;
        } else if (this.preventions["Annual Checkup"] > 60 && this.preventions["Annual Checkup"] <= 70) {
            triHeight = width / 175;
        } else if (this.preventions["Annual Checkup"] > 70 && this.preventions["Annual Checkup"] <= 80) {
            triHeight = width / 125;
        } else if (this.preventions["Annual Checkup"] > 80 && this.preventions["Annual Checkup"] <= 100) {
            triHeight = width / 75;
        }
        fill(satur, satur, 50, .7);
        triangle(
            this.x - triWidth / 2, this.y,
            this.x + triWidth / 2, this.y,
            this.x, this.y + triHeight,
        )

        resetMatrix();

    }

    nameDisplay() {
        //show county name by the locality
        translate(0, 0);
        noStroke();
        textSize(5);
        fill(150);

        text(this.name, this.x, this.y);

        resetMatrix();
    }
}