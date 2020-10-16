/*  –––– –––– –––– –––– Variablen / Slider Ranges –––– –––– –––– ––––  */

var menge = 30;
//set slider range with magic variables
var mengeMin = 1;
var mengeMax = 200;
var mengeSteps = 1;

var windrichtung = 45;
//set slider range with magic variables
var windrichtungMin = 1;
var windrichtungMax = 360;
var windrichtungSteps = 1;

var wahrscheinlichkeit = 5;
//set slider range with magic variables
var wahrscheinlichkeitMin = 1;
var wahrscheinlichkeitMax = 100;
var wahrscheinlichkeitSteps = 1;

/*  –––– –––– –––– –––– GUI Setup –––– –––– –––– ––––  */

var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#F4F1F0');

  gui = createGui('Niederschlag ☔');
  gui.addGlobals('menge', 'windrichtung', 'wahrscheinlichkeit');

  //only call draw when then gui is changed
  noLoop();
}

/*  –––– –––– –––– –––– Draw –––– –––– –––– ––––  */

function draw() {
  colorMode(HSL);
  let mint = color(100, 24, 81);
  let grey = color(15, 15, 95);

  fill(mint);
  stroke(grey);
  strokeWeight(3);

  let size = wahrscheinlichkeit * 10;

  for (let i = 50; i <= width-200; i+=50) {
    for (let q = 50; q <= height-200; q+=50) {
      square(50 + i, 50 + q, size, 0, size, size, size);
    }
  }


}
