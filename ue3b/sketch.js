let x = 100;

function setup() {
  createCanvas(840, 770);
  background('#ffdee2');
}

function draw() {

  for (let x = 70; x <= width; x = x + 100) {
    for (let y = 110; y <= height; y = y + 200) {
      //black arc
      fill(0, 0, 0);
      noStroke();
      arc(x, y, 100, 100, HALF_PI + PI, PI + TWO_PI + QUARTER_PI);
    }

    for (let z = 60; z <= width; z = z + 200) {
      //pink arc
      fill('#ffdee2');
      stroke(1);
      strokeWeight(2);
      arc(x, z, 100, 100, HALF_PI, PI + PI);
  }
}
}

/* second line
fill(0, 0, 0);
noStroke();
arc(x, 210, 100, 100, HALF_PI, PI + PI + QUARTER_PI);

fill('#ffdee2');
stroke(1);
strokeWeight(2);
arc(x, 260, 100, 100, HALF_PI + PI, PI + TWO_PI);

//third line
fill(0, 0, 0);
noStroke();
arc(x, 410, 100, 100, HALF_PI + PI, PI + TWO_PI + QUARTER_PI);

fill('#ffdee2');
stroke(1);
strokeWeight(2);
arc(x, 360, 100, 100, HALF_PI, PI + PI);

//fourth line
fill(0, 0, 0);
noStroke();
arc(x, 510, 100, 100, HALF_PI, PI + PI + QUARTER_PI);

fill('#ffdee2');
stroke(1);
strokeWeight(2);
arc(x, 560, 100, 100, HALF_PI + PI, PI + TWO_PI);

//first line
fill(0, 0, 0);
noStroke();
arc(x, 710, 100, 100, HALF_PI + PI, PI + TWO_PI + QUARTER_PI);

fill('#ffdee2');
stroke(1);
strokeWeight(2);
arc(x, 660, 100, 100, HALF_PI, PI + PI);*/
