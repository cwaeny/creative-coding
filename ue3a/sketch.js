function setup() {
  createCanvas(950, 950);
  background('#061c20');
}

function draw() {
  noFill();
  stroke('#106465');
  for (let x = 25; x <= 100; x = x + 10){
    beginShape();
    vertex(0 + x, 0);
    vertex(475, 100 + x);
    vertex(475 + x, 475);
    vertex(850, 475 + x);
    vertex(850 + x, 850);
    vertex(100, 850 + x);
    endShape(CLOSE);
  }

  noFill();
  stroke('#d8b08b');
  for (let y = 25; y <= 100; y = y + 10){
    beginShape();
    vertex(100 - y, 100);
    vertex(475, 100 - y);
    vertex(475 - y, 475);
    vertex(850, 475 - y);
    vertex(850 - y, 850);
    vertex(100, 850 - y);
    endShape(CLOSE);
  }

}
