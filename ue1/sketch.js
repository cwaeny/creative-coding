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
rect(0, 380, 300, 204, 0, 0, 0, 200);

//yellow shape
fill(253, 221, 2);
noStroke();
rect(500, 380, 300, 204, 0, 0, 200, 0);

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

//black half head
fill(0, 0, 0);
noStroke();
arc(400, 200, 300, 380, PI + HALF_PI, TWO_PI);

//hair one
fill(0, 0, 0);
noStroke();
rect(220, 31, 180, 30, 0, 0, 0, 200);

//hair two
fill(0, 0, 0);
noStroke();
rect(220, 71, 180, 30, 0, 0, 0, 200);

//hair three
fill(0, 0, 0);
noStroke();
rect(220, 111, 180, 30, 0, 0, 0, 200);

//hair four
fill(0, 0, 0);
noStroke();
rect(220, 151, 180, 30, 0, 0, 0, 200);

//yellow half head
fill(253, 221, 2);
noStroke();
arc(400, 200, 300, 340, PI, PI + HALF_PI);

//left white eye
fill(255, 255, 255);
noStroke();
arc(345, 120, 40, 40, 0, PI);

//left black inner eye
fill(0, 0, 0);
noStroke();
arc(345, 120, 20, 20, 0, PI);

//left black outer eye
fill(0, 0, 0);
noStroke();
arc(345, 120, 40, 40, PI, TWO_PI);

//right white eye
fill(255, 255, 255);
noStroke();
arc(455, 120, 40, 40, 0, PI);

//right black inner eye
fill(0, 0, 0);
noStroke();
arc(455, 120, 20, 20, 0, PI);

//upper nose
fill(255, 255, 255);
noStroke();
triangle(400, 150, 375, 175, 425, 175);

//lower nose
fill(0, 0, 0);
noStroke();
triangle(400, 200, 375, 175, 425, 175);

//green pole
fill(0, 150, 65);
noStroke();
rect(190, 20, 10, 360);

//yellow pole
fill(253, 221, 2);
noStroke();
rect(180, 20, 10, 360);

//yellow2 pole
fill(253, 221, 2);
noStroke();
rect(600, 20, 10, 360);

//blue pole
fill(5, 76, 154);
noStroke();
rect(610, 20, 10, 360);

//left flag 1
fill(232, 72, 144);
noStroke();
rect(40, 20, 140, 75, 0, 0, 0, 200);

//left flag 2
fill(232, 72, 144);
noStroke();
rect(20, 110, 160, 75, 0, 0, 0, 200);

//right flag 1
fill(232, 72, 144);
noStroke();
rect(620, 20, 140, 75, 0, 0, 200, 0);

//right flag 2
fill(232, 72, 144);
noStroke();
rect(620, 110, 160, 75, 0, 0, 200, 0);

//white circle left
fill(255);
noStroke();
ellipse(95, 290, 50, 50);

//white circle right
fill(255);
noStroke();
ellipse(705, 290, 50, 50);

//orange circle left
fill(245, 153, 35);
noStroke();
ellipse(95, 290, 25, 25);

//orange circle right
fill(245, 153, 35);
noStroke();
ellipse(705, 290, 25, 25);

//finger right 1
fill(0, 0, 0);
noStroke();
rect(460, 380, 40, 25, 100, 0,0, 100);

//finger right 2
fill(0, 0, 0);
noStroke();
rect(460, 410, 40, 25, 100, 0,0, 100);

//finger right 3
fill(0, 0, 0);
noStroke();
rect(460, 440, 40, 25, 100, 0,0, 100);

//finger right 4
fill(0, 0, 0);
noStroke();
rect(460, 470, 40, 25, 100, 0,0, 100);

//finger right 5
fill(0, 0, 0);
noStroke();
rect(460, 500, 40, 25, 100, 0,0, 100);

//finger right 6
fill(0, 0, 0);
noStroke();
rect(460, 530, 40, 25, 100, 0,0, 100);

//finger right 7
fill(0, 0, 0);
noStroke();
rect(460, 560, 40, 25, 100, 0,0, 100);


//finger left 1
fill(0, 0, 0);
noStroke();
rect(300, 380, 40, 25, 0, 100, 100, 0);

//finger left 2
fill(0, 0, 0);
noStroke();
rect(300, 410, 40, 25, 0, 100, 100, 0);

//finger left 3
fill(0, 0, 0);
noStroke();
rect(300, 440, 40, 25, 0, 100, 100, 0);

//finger left 4
fill(0, 0, 0);
noStroke();
rect(300, 470, 40, 25, 0, 100, 100, 0);

//finger left 5
fill(0, 0, 0);
noStroke();
rect(300, 500, 40, 25, 0, 100, 100, 0);

//finger left 6
fill(0, 0, 0);
noStroke();
rect(300, 530, 40, 25, 0, 100, 100, 0);

//finger right 7
fill(0, 0, 0);
noStroke();
rect(300, 560, 40, 25, 0, 100, 100, 0);


}
