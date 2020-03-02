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
createCanvas(windowWidth,windowHeight);
code = 0xAC00;
	background(0);
  textAlign(CENTER);
	
	 //DeviceOrientationEvent, DeviceMotionEvent
  if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
    //ios 13 device
    DeviceOrientationEvent.requestPermission()
    .catch(() => {
    let button = createButton("Please click to allow your sensors");
    button.style("font-size", "24px");
		    button.style("background-color", "white");
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
        }else{
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
	
background(0);
  textFont(myFont);
  textSize(200);
    fill(255);
  text( char(code), width/2,height/2+50);
    textSize(20);
    fill(255);
  text("shake it",width/2,height-50);
	    textSize(10);

}
function deviceShaken(){
  let r = floor(random(0xAC00,0xD7A3));
  code =r;
}
