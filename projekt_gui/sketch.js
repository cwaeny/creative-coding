/*  –––– –––– –––– –––– Variablen / Slider Ranges –––– –––– –––– ––––  */

var menge = 10;
//set slider range with magic variables
var mengeMin = 1;
var mengeMax = 10;
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

  gui = createGui('Rainy days ☔');
  gui.addGlobals('menge', 'windrichtung', 'wahrscheinlichkeit');

  //only call draw when then gui is changed
  noLoop();
}

/*  –––– –––– –––– –––– Draw –––– –––– –––– ––––  */

function draw() {
  colorMode(HSL);
  angleMode(DEGREES);
  let mint = color(100, 24, 81);
  let green = color(182, 50, 20);
  let beige = color(25, 64, 68);

  let size = wahrscheinlichkeit + 50;
  randomSeed(0); //let drops keep its color even when slider changes


  //draw drops – each with a random color
  for (let i = 0; i <= width; i+=60) {
    for (let q = 0; q <= height; q+=60) {
      let randCol = int(random(0, 3));
      if (randCol == 0) {
        noFill();
        stroke(green);
        strokeWeight(2);
        square(0 + i, 0 + q, size, 0, size, size, size);
      }
      if (randCol == 1) {
        noFill();
        stroke(mint);
        strokeWeight(2);
        square(0 + i, 0 + q, size, 0, size, size, size);
      }
      if (randCol == 2) {
        noFill();
        stroke(beige);
        strokeWeight(2);
        square(0 + i, 0 + q, size, 0, size, size, size);
      }
    }
  }


}
