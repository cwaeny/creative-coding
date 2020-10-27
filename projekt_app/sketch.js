
let key='06e280b15621fb57f14de8e91c05e79e';
let projektTitel = 'Is it raining, man?';
let wahrscheinlichkeit = '% probability';
let fontBlack;
let probability;
let input;
let button;

function preload() {
  fontBlack = loadFont('../assets/Proxima-Nova-Black.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let url = 'https://api.weatherstack.com/current?access_key='+key+'&query=Zürich'; //Achtung gratis key unterstützt SSL nicht
  loadJSON(url, gotWeather);
  input = createInput();
  input.position(((width/5)*3)+150, 400);
  button=createButton('submit');
  button.position(((width/5)*3)+380, 400);
  button.mousePressed(reloadJson);


  background('#DD033A');
  angleMode(DEGREES);

  /*  –––– –––– –––– –––– TTITEL SETUP –––– –––– –––– ––––  */

  textSize(90);
  textLeading(80);
  fill(255);
  textFont(fontBlack);
  text(projektTitel, ((width/5)*3)+150, 100, 200, 500);

}

function draw() {

  /*  –––– –––– –––– –––– BACKGROUND SPLIT –––– –––– –––– ––––  */

    fill('#fff');
    noStroke();
    rect(0, 0, (width/5)*3.2, height);

  /*  –––– –––– –––– –––– WOLKE –––– –––– –––– ––––  */

  fill('#E7EEEE');
  noStroke();
  circle(500, 200, 300);

  fill('#E7EEEE');
  noStroke();
  circle(340, 180, 100);

  fill('#E7EEEE');
  noStroke();
  circle(510, 330, 110);

  fill('#E7EEEE');
  noStroke();
  circle(400, 330, 130);

  fill('#E7EEEE');
  noStroke();
  circle(290, 270, 200);

  fill('#E7EEEE');
  noStroke();
  circle(640, 340, 170);

  fill('#E7EEEE');
  noStroke();
  circle(670, 220, 90);

  fill('#E7EEEE');
  noStroke();
  circle(750, 270, 150);

  /*  –––– –––– –––– –––– WOLKE ARCS –––– –––– –––– ––––  */

  fill('#022941');
  noStroke();
  arc(500, 200, 300, 300, -90, probability);

  fill('#022941');
  noStroke();
  arc(340, 180, 100, 100, -90, probability);

  fill('#022941');
  noStroke();
  arc(510, 330, 110, 110, -90, probability);

  fill('#022941');
  noStroke();
  arc(400, 330, 130, 130, -90, probability);

  fill('#022941');
  noStroke();
  arc(290, 270, 200, 200, -90, probability);

  fill('#022941');
  noStroke();
  arc(640, 340, 170, 170, -90, probability);

  fill('#022941');
  noStroke();
  arc(670, 220, 90, 90, -90, probability);

  fill('#022941');
  noStroke();
  arc(750, 270, 150, 150, -90, probability);

  /*  –––– –––– –––– –––– RAINDROPS –––– –––– –––– ––––  */

  fill('#E7EEEE');
  noStroke();
  circle(700, 670, 35);

  fill('#E7EEEE');
  noStroke();
  circle(360, 850, 35);

  fill('#E7EEEE');
  noStroke();
  circle(230, 760, 35);

  fill('#E7EEEE');
  noStroke();
  circle(680, 460, 35);

  fill('#E7EEEE');
  noStroke();
  circle(300, 650, 35);

  fill('#E7EEEE');
  noStroke();
  circle(800, 550, 35);

  fill('#E7EEEE');
  noStroke();
  circle(800, 830, 35);

  fill('#E7EEEE');
  noStroke();
  circle(250, 500, 35);

  fill('#E7EEEE');
  noStroke();
  circle(400, 560, 35);

  fill('#E7EEEE');
  noStroke();
  circle(550, 600, 35);

  fill('#E7EEEE');
  noStroke();
  circle(500, 460, 35);

  fill('#E7EEEE');
  noStroke();
  circle(600, 860, 35);

  fill('#E7EEEE');
  noStroke();
  circle(520, 730, 35);

  fill('#E7EEEE');
  noStroke();
  circle(820, 380, 35);

  /*  –––– –––– –––– –––– RAINDROPS ARCS –––– –––– –––– ––––  */

  fill('#022941');
  noStroke();
  arc(700, 670, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(360, 850, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(230, 760, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(680, 460, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(300, 650, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(800, 550, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(800, 830, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(250, 500, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(400, 560, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(550, 600, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(500, 460, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(600, 860, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(520, 730, 35, 35, -90, probability);

  fill('#022941');
  noStroke();
  arc(820, 380, 35, 35, -90, probability);

}

function gotWeather(weather) {
    probability = weather.current.humidity;
}

// function writeProbability() {
//       textSize(25);
//       textFont(fontBlack);
//       text(probability+wahrscheinlichkeit, ((width/5)*3)+150, 800, 200, 500);
// }



function reloadJson(){

    let ort = input.value();
    let url = 'http://api.weatherstack.com/current?access_key='+key+'&query='+ort;

    loadJSON(url, gotWeather);
}
