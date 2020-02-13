/* SEJIN OH
SourceCode_
github.com/designerSejinOH/Live
*/

let myFont;
let code;
let c;
function preload() {
  myFont = loadFont('D2CodingBold-Ver1.3-20171129.ttf');
}
function setup() {
createCanvas(windowWidth,windowHeight);
code = 0xAC00;
  textAlign(CENTER);


}

function draw() {
background(0);
  textFont(myFont);
  textSize(200);
    fill(255);
  text( char(code), width/2,height/2+50);
    textSize(20);
    fill(255);
  text("shake it",width/2,height-50);
	    textSize(10);

	  text("The device has not been running since the iPhone X",width/2,height-40);

}
function deviceShaken(){
  let r = floor(random(0xAC00,0xD7A3));
  code =r;
}
