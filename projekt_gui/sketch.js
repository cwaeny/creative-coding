

/*  –––– –––– –––– –––– Variablen –––– –––– –––– ––––  */

var arc;
var wahrscheinlichkeit = 30;
var menge = 10

/*let dark = color('#19494B');
let mint = color('#CADAC2');
let grey = color('#F4F1F0');
let beige = color('#E2A67B');*/

var gui;


/*  –––– –––– –––– –––– Setup –––– –––– –––– ––––  */


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#19494B');

  sliderRange(0, 100, 1);
  gui = createGui('Niederschlag ☔');
  gui.addGlobals('wahrscheinlichkeit', 'menge');

  //only call draw when then gui is changed
  noLoop();
}


/*  –––– –––– –––– –––– Draw –––– –––– –––– ––––  */


function draw() {
  angleMode(DEGREES);

  // first arc
  noFill();
  strokeWeight(2);
  stroke('#CADAC2');
  rectMode(CORNERS);
  for (let x = 100; x <= width-200; x += 100) {
    for (let y = 100; y <= height-200; y += 100) {
      arc(100 + x, 100 + y, 50, 50, 0, 270, PIE);
    }
  };













}
