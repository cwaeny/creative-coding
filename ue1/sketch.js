function setup() {
  createCanvas(800, 900);
}

function draw() {
//first blue
fill(5, 76, 154);
noStroke();
rect(0, 200, 400, 200);

//orange
fill(245, 153, 35);
noStroke();
rect(0, 400, 400, 400);

//green
fill(0, 150, 65);
noStroke();
rect(400, 200, 400, 200);

//second blue
fill(5, 76, 154);
noStroke();
rect(400, 400, 400, 400);

//pink shape
fill(232, 72, 144);
noStroke();
rect(0, 200, 200, 180, 0, 0, 0, 200);

//yellow shape
fill(253, 221, 2);
noStroke();
rect(0, 380, 300, 200, 0, 0, 0, 200);

//yellow shape
fill(253, 221, 2);
noStroke();
rect(500, 380, 300, 200, 0, 0, 200, 0);

//white circle
fill(255);
noStroke();
ellipse(400, 490, 100, 100);

//yellow circle
fill(253, 221, 2);
noStroke();
ellipse(400, 490, 40, 40);

//pink shape
fill(232, 72, 144);
noStroke();
rect(600, 200, 200, 180, 0, 0, 200, 0);

}
