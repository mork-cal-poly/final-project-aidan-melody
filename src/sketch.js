function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background('powderblue');
  drawbackground()
}

function drawbackground() {
  fill('#2B861D');
  rect(0,100,400,300);
  //fence posts
  for (let fencex = 0; fencex <= 400; fencex += 12) {
    fencepole(fencex,90,1);
  }
  //fence bars
  push();
  noStroke();
  fill(255);
  rect(0,95,400,5);
  rect(0,110,400,5);
  pop();
}
function fencepole(x,y,s) {
  push();
  scale(s);
  noStroke();
  translate(x,y);
  fill(255);
  rect(0,0,6,32);
  triangle(0,0,6,0,3,-3);
  pop();
}