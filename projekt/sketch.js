let projektTitel = 'Is it raining, man?';
let fontBlack;
let input, button;

function preload() {
  fontBlack = loadFont('../assets/Proxima-Nova-Black.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#DD033A');
  angleMode(DEGREES);

  /* //https://p5js.org/examples/dom-input-and-button.html
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);*/

}


function draw() {
  //Setting Hintergrundaufteilung
  fill('#fff');
  noStroke();
  rect(0, 0, (width/5)*3.2, height);

  //Typografie Einstellungen für den Titel
  textSize(90);
  textLeading(80);
  fill(255);
  textFont(fontBlack);
  text(projektTitel, ((width/5)*3)+150, 100, 200, 500);

  //Wolke zeichnen
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
}
