class Label {

	//switch btwn 2 strings: "lilac" & "pink"

	constructor() {
		this.x = width/2;
		this.y = height - height/20;
		this.textStr = "lilac";
	}

	display() {
		text(this.textStr, this.x, this.y)
	}

	flipIfNear(x, y) {
		
		if(dist(this.x, this.y, x, y) < 50) {
			if(this.textStr === "lilac") {
				this.textStr = "pink";
				console.log(this.textStr);
			} else if(this.textStr === "pink"){
				this.textStr = "lilac";
				console.log(this.textStr);
			} 
		}
		
	}

}
