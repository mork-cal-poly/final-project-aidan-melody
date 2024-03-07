function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}
let clicked = false;
let xlawn = 200;
let wpath = 0;
function draw() {
  background('powderblue');
  drawbackground();
  drawSandbox();
  if (clicked) {
    updateLawnmower;
    wpath += 0.5;
    xlawn += 0.5;
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

function updateLawnmower(x,y,s) {
  lawnx += 0.5
  drawLawnmower(lawnx,y,s)
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
}