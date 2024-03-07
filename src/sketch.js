function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}
let clicked = false;
let clicked1 = 0;
let clicked2 = 0;
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
  if (clicked1 > 0 && clicked1 < 5) {
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
  if (clicked1 > 1 && clicked1 < 6) {
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
  if (clicked1 > 2 && clicked1 < 7) {
    drawWeiner(65,200,0.7,wr3,wg3,wb3);
    wr3 -= .1
    wg3 -= .1
    wb3 -= .1
    if (wr3 < 0) {
    wr3 = 0
    wg3 = 0
    wb3 = 0
    }
  }
  if (clicked1 > 3 && clicked1 < 8) {
    drawWeiner(75,200,0.7,wr4,wg4,wb4);
    wr4 -= .1
    wg4 -= .1
    wb4 -= .1
    if (wr4 < 0) {
    wr4 = 0
    wg4 = 0
    wb4 = 0
    }
  }
  if (clicked1 == 9) {
    clicked1 = 1
    wr = 230;
    wg = 170;
    wb = 140;
//weiner2
    wr2 = 230;
    wg2 = 170;
    wb2 = 140;
//weiner3
    wr3 = 230;
    wg3 = 170;
    wb3 = 140;
//weiner4
    wr4 = 230;
    wg4 = 170;
    wb4 = 140;
  }
  if (clicked2 == 1) {
    drawCastle(265,240,0.7);
  }
  if (clicked2 == 2) {
    updatedCastle(265,240,0.7);
  }
  if (clicked2 == 0 || clicked2 > 2) {
    push();
    noFill();
    stroke("#C7A77E")
    arc(255, 225, 20, 13, PI, 0)
    arc(245, 233, 20, 13, PI, 0)
    arc(265, 233, 20, 13, PI, 0)
    pop();
    clicked2 = 0
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
  fill("#DCCE8C")
  quad(187,200,182,270,360,270,300,200)
  fill('#8E5C04')
  rect(185,200,115, 5)
  quad(185,200,180,270,182,270,187,200)
  quad(300, 200, 300, 205, 360, 280, 360, 270)
  rect(180,270, 180, 10)
  push();
  noStroke();
  rotate(PI/12)
  fill("red")
  rect(360,160,7,10)
  strokeWeight(1)
  stroke("red")
  line(363.5,160,363.5,155)
  noFill();
  arc(363.5,152,5,5,0,PI)
  line(361,152, 365, 152)
  pop();
  noStroke();
  fill("#DCCE8C");
  rect(300, 257, 14, 10)
  pop();
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
function drawCastle(x,y,s) {
  push();
  translate(x,y);
  scale(s)
  fill(255);
  //main
  fill("#D6B994")
  rect(-40,-30,40,30)
  //towers
  fill("#DCCE8C")
  rect(-50,-40, 13, 40)
  rect(-0,-40, 13, 40)
  //triangle roof
  fill("#C9AA80")
  triangle(-43.5, -49, -53, -40, -34, -40)
  triangle(6.5, -49, -3, -40, 16, -40)
  //battlements
  fill("#D6B994")
  rect(-37,-34, 5, 4)
  rect(-28,-34, 8, 4)
  rect(-17,-34, 8, 4)
  rect(-5,-34, 5, 4)
  fill("#C7A77E")
  //door
  noStroke();
  arc(-17,-10,10,10,PI,0)
  rect(-22,-10,10,10)
  //windows
  arc(-43.5,-25,5,5,PI,0)
  rect(-46,-25,5,5)
  
  arc(7,-25,5,5,PI,0)
  rect(4.5,-25,5,5)
  //sandinfront
  push();
  stroke(0);
  strokeWeight(5)
  //point(-60,5)
  //point(-30,-4)
  //point(0,0)
  //point(14,-4)
  //point(14,5)
  stroke('#DCCE8C')
  fill("#DCCE8C")
  strokeWeight(3)
  beginShape();
  curveVertex(14,5)
  curveVertex(-60,5);
  curveVertex(-30,-4);
  curveVertex(0,0);
  curveVertex(14,-4);
  curveVertex(14,5);
  curveVertex(-60,5);
  
  endShape();
  pop();
  pop();
}
function updatedCastle(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  fill(255);
  stroke(0);
  strokeWeight(0.5)
  //main
  fill("#D6B994")
  rect(-40,-30,40,30)
  //towers
  fill("#DCCE8C")
  rect(-50,-30, 13, 30)
  rect(-0,-40, 13, 40)
  //battlements
  fill("#D6B994")
  rect(-37,-34, 5, 4)
  rect(-28,-34, 8, 4)
  rect(-17,-34, 8, 4)
  rect(-5,-34, 5, 4)
  fill("#C7A77E")
  //door
  noStroke();
  arc(-17,-10,10,10,PI,0)
  rect(-22,-10,10,10)
  //windows
  arc(-43.5,-25,5,5,PI,0)
  rect(-46,-25,5,5)
  
  arc(7,-25,5,5,PI,0)
  rect(4.5,-25,5,5)
  //sandinfront
  push();
  stroke(0);
  strokeWeight(5)
  //point(-60,5)
  //point(-30,-4)
  //point(0,0)
  //point(14,-4)
  //point(14,5)
  stroke('#DCCE8C')
  fill("#DCCE8C")
  strokeWeight(3)
  beginShape();
  curveVertex(14,5)
  curveVertex(-60,5);
  curveVertex(-30,-4);
  curveVertex(0,0);
  curveVertex(14,-4);
  curveVertex(14,5);
  curveVertex(-60,5);
  endShape();
  push();
  noStroke();
  fill("#DCCE8C")
  ellipse(0,-30,40,30)
  ellipse(-50,-30,20,20)
  pop();
  pop();
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
  if (mouseX > 235 &&
    mouseX < 275 &&
    mouseY > 220 &&
    mouseY < 235
    ) {
      clicked2 += 1;
    }
}
//weiners rect(30,185, 60, 30)
//sand rect(235,220,40,15)
