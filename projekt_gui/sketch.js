/*  –––– –––– –––– –––– Variablen / Slider Ranges –––– –––– –––– ––––  */

var windrichtung = 0;
//set slider range with magic variables
var windrichtungMin = 1;
var windrichtungMax = 360;
var windrichtungSteps = 1;

var wahrscheinlichkeit = 5;
//set slider range with magic variables
var wahrscheinlichkeitMin = 1;
var wahrscheinlichkeitMax = 100;
var wahrscheinlichkeitSteps = 1;

var regenstärke = 2;
//set slider range with magic variables
var regenstärkeMin = 1;
var regenstärkeMax = 50;
var regenstärkeSteps = 1;

var jahreszeit = ['Herbst', 'Winter', 'Frühling', 'Sommer'];

/*  –––– –––– –––– –––– GUI Setup –––– –––– –––– ––––  */

var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);


  gui = createGui('Rainy days ☔');
  gui.addGlobals('jahreszeit', 'wahrscheinlichkeit', 'windrichtung', 'regenstärke');

  //only call draw when then gui is changed
  noLoop();
}

/*  –––– –––– –––– –––– Draw –––– –––– –––– ––––  */

function draw() {
  background('#F4F1F0');
  colorMode(HSL);
  angleMode(DEGREES);

  //define colors for each season
  switch (jahreszeit) {
    case 'Herbst' :
      var first = color(37, 77, 84);
      var second = color(21, 32, 60);
      var third = color(19, 36, 39);
      break;
    case 'Winter' :
      var first = color(217, 95, 17);
      var second = color(203, 40, 61);
      var third = color(197, 66, 40);
      break;
    case 'Frühling' :
      var first = color(266, 86, 92);
      var second = color(82, 41, 70);
      var third = color(125, 15, 47);
      break;
    case 'Sommer' :
      var first = color(348, 72, 48);
      var second = color(23, 90, 52);
      var third = color(42, 100, 61);
      break;
  }

  let size = wahrscheinlichkeit + 50;
  randomSeed(5); //let drops keep its color even when slider changes


  //draw drops – each with a random color
  for (let i = 0; i <= width; i+=60) {
    for (let q = 0; q <= height; q+=60) {
      let randCol = int(random(0, 3));
      if (randCol == 0) {
        stroke(first);
      }
      if (randCol == 1) {
        stroke(second);
      }
      if (randCol == 2) {
        stroke(third);
      }

      //setting windrichtung -> rotate
      push(); //KOSY-Position abspeichern, Mittelpunkt definieren

      translate(0+i+size/2,0+q+size/2);
      rotate(windrichtung);
      //Tropfen zürück zur ursprünglichen Position
      translate(-1*(0+i+size/2), -1*(0+q+size/2));
      strokeWeight(regenstärke);
      noFill();
      square(0 + i, 0 + q, size, 0, size, size, size);

      pop();
    }
  }


}
