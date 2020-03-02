/* SEJIN OH
SourceCode_
github.com/designerSejinOH/Live
*/
let permissionGranted = false;

let myFont;
let code;
let c;

function preload() {
	myFont = loadFont('D2CodingBold-Ver1.3-20171129.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	code = 0xAC00;
	textAlign(CENTER);
background(100);
	//DeviceOrientationEvent, DeviceMotionEvent
	if (typeof (DeviceOrientationEvent) !== 'undefined' && typeof (DeviceOrientationEvent.requestPermission) === 'function') {
		//ios 13 device
		DeviceOrientationEvent.requestPermission()
			.catch(() => {
				let button = createButton("Please click to allow sensors");
				button.style("font-size", "20px");
			button.style("color","white");
				button.style("background-color", "black");
			button.style("box-shadow","5px 5px 5px")
			
				button.center();
				button.mousePressed(requsetAccess);
				throw error;
			})
			.then(() => {
				// on any subsequent visits
				permissionGranted = true;
			})
	} else {
		//non ios 13 device
		textSize(48);
		// text("non ios 13 device", 100, 100);
		permissionGranted = true;
	}
}

function requsetAccess() {
	DeviceOrientationEvent.requestPermission()
		.then(response => {
			if (response == 'granted') {
				permissionGranted = true;
			} else {
				permissionGranted = false;
			}
		})
		.catch(console.error);
	this.remove();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	if (!permissionGranted) {
		return;
	}
	noStroke();
	fill(0,50);
rect(0,0,width,height);
	textFont(myFont);
	textSize(210);
	fill(255);
	text(char(code), width / 2, height / 2 + 50);
	textSize(20);
	fill(255);
	text("흔들어보세요!", width / 2, height - 70);
	textSize(50);

}

function deviceShaken() {
	let r = floor(random(0xAC00, 0xD7A3));
	code = r;
}
