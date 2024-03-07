function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}
let clicked = false;
let clicked1 = 0;
let xlawn = 200;
let wpath = 0;
let wr = 230;
let wg = 170;
let wb = 140;
//weiner2
let wr2 = 230;
let wg2 = 170;
let wb2 = 140;
//weiner3
let wr3 = 230;
let wg3 = 170;
let wb3 = 140;
//weiner4
let wr4 = 230;
let wg4 = 170;
let wb4 = 140;
function draw() {
  background('powderblue');
  drawbackground();
  drawSandbox();
  drawBBQ(60,300,0.8);
  if (clicked) {
    wpath += 0.5;
    xlawn += 0.5;
  }
  if (clicked1 > 0) {
    drawWeiner(45,200,0.7,wr,wg,wb);
    wr -= .1
    wg -= .1
    wb -= .1
    if (wr < 0) {
    wr = 0
    wg = 0
    wb = 0
    }
  }
  if (clicked1 > 1) {
    drawWeiner(55,200,0.7,wr2,wg2,wb2);
    wr2 -= .1
    wg2 -= .1
    wb2 -= .1
    if (wr2 < 0) {
    wr2 = 0
    wg2 = 0
    wb2 = 0
    }
  }
  if (clicked1 > 2) {
    drawWeiner(65,200,0.7,wr2,wg2,wb2);
    wr3 -= .1
    wg3 -= .1
    wb3 -= .1
    if (wr3 < 0) {
    wr3 = 0
    wg3 = 0
    wb3 = 0
    }
  }
  if (clicked1 > 3) {
    drawWeiner(75,200,0.7,wr2,wg2,wb2);
    wr4 -= .1
    wg4 -= .1
    wb4 -= .1
    if (wr4 < 0) {
    wr4 = 0
    wg4 = 0
    wb4 = 0
    }
  }
  lawnpath(wpath);
  drawLawnmower(xlawn,150,0.7);
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

function drawSandbox() {
  push();
  fill('#E3E84D')
  quad(187,200,182,270,360,270,300,200)
  fill('#8E5C04')
  rect(185,200,115, 5)
  quad(185,200,180,270,182,270,187,200)
  quad(300, 200, 300, 205, 360, 280, 360, 270)
  rect(180,270, 180, 10)
  noFill();
  arc(280, 225, 20, 13, PI, 0)
  //ball
  fill("blue")
  ellipse(215,205,20,20)
  pop();

}

function drawLawnmower(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  fill(130);
  quad(-70, -70, -20, -14, -22, -20, -70, -73)
  fill("darkred")
  quad(-30,-25,-29,-30,46,-13, 50,-10)
  fill(130)
  //first handle
  quad(-10,-33, 20, -33, 20, -18, -10, -23)
  rect(-12,-33, 35,8)
  fill("red")
  quad(-30,-25,-30,0,50,0,50,-10) 
  
  fill(130)
  quad(-73, -62, -20, -10, -20, -13, -73, -66)
  ellipse(5.5, -33, 35, 4)
  fill(0)
  quad(-73, -62, -70, -62, -70,-73, -72,-73)
  ellipse(-20,-5,15,15)
  ellipse(40, -5, 15, 15)
  fill(150)
  ellipse(-20,-5, 5, 5)
  ellipse(40, -5, 5, 5)
  fill("darkgreen")
  pop();
}
function drawBBQ(x, y, s) {
  push();
  translate(x,y);
  scale(s);
  //leg in back
  push();
  stroke(140);
  strokeWeight(6);
  line(-3,-90, -7, -30)
  stroke(255,255,255,100);
  strokeWeight(3);
  line(-3,-90,-7,-30)
  noStroke();
  fill(0);
  rect(-11, -30, 8, 6)
  pop();
  
  //fire
  fill("red")
  arc(0,-125, 80, 80, 0, PI)
  fill(0);
  ellipse(0,-125, 79, 30)
  noStroke();
  fill(255,165,0,160)
  ellipse(0,-120,60,25)
  fill(255,165,0,160)
  ellipse(0,-117,45,12)
  fill(255,165,0,255)
  ellipse(0,-115,20,12)
  noFill();
  
  
  //metal shell
  stroke("red")
  strokeWeight(2)
  arc(0,-125, 79, 30, PI, 3*PI)
  //grill
  stroke(120)
  line(-30, -134, -32, -117)
  line(-25, -136, -27, -115)
  line(-20, -137, -22, -114)
  line(-15, -138, -17, -113)
  line(-10, -139, -12, -112)
  line(-5, -139, -7, -112)
  line(-0, -139, -2, -112)
  line(5, -139, 3, -112)
  line(10, -139, 8, -112)
  line(15, -138, 13, -113)
  line(20, -137, 18, -114)
  line(25, -136, 24, -115)
  line(30, -134, 29, -117)
  //reflection
  push();
  noStroke();

  fill(255,255,255,160)
  rotate(-PI/4)
  ellipse(90,-55, 20, 6)
  pop();
  //leg in front
  noFill();
  strokeWeight(4);
  stroke("red");
  ellipse(0,-50, 30,8)
  stroke(140);
  strokeWeight(6);
  line(-10,-90, -20, -10)
  line(13,-90, 23, -14)
  stroke(255,255,255,100);
  strokeWeight(3);
  //line(-14,-60,-17,-37)
  line(-10,-90,-20,-10)
  line(13,-90,23,-14)
  noStroke();
  fill(0);
  rect(-24, -10, 8, 6)
  rect(19, -17, 8, 6)

  pop();
  
}
function drawWeiner(x,y,s,r,g,b) {
  push();
  translate(x,y);
  rotate(PI/4);
  scale(s);
  noStroke();
  fill(r,g,b);
  circle(-9,-2,7,7);
  circle(-7,-1,7,7);
  circle(-5,0,7,7);
  circle(-4,0,7,7);
  circle(-3,0,7,7);
  circle(-2,0,7,7);
  circle(-1,0,7,7);
  circle(0,0,7,7);
  circle(1,0,7,7);
  circle(2,0,7,7);
  circle(3,0,7,7);
  circle(4,0,7,7);
  circle(5,0,7,7);
  circle(7,-1,7,7);
  circle(9,-2,7,7);
  pop();
}

function lawnpath(x) {
  push();
  fill('darkgreen')
  rect(200, 140,x,10)
  pop();
}
function mouseClicked() {
  if (mouseX > 180 &&
    mouseX < 250 &&
    mouseY > 130 &&
    mouseY < 150
    ) {
      clicked = !clicked;
    }
    if (mouseX > 30 &&
      mouseX < 90 &&
      mouseY > 185 &&
      mouseY < 215
      ) {
        clicked1 += 1;
      }
}
//rect(30,185, 60, 30)
