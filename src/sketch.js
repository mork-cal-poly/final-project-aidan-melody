//kitchen scene
let timer = 0;
let sx = 1;
let clickedOnFridge = 0;
let clickedOnLamp = 0;
let scene = 0;

//backyard scene
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


// timer
let t = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (scene == 0) {
    drawScene0();
  } 
  if (scene == 1) {
    drawScene1();
  } 
}


function drawScene0() {
  background(255,242,214);
  drawBackground();
  drawFridge();
  if (clickedOnLamp == 1 ) {
     push();
     fill(230,219,55,100);
     noStroke();
     rect(175,100,50,30);  //change lamp to origin
    pop();
  }
  else {
    clickedOnLamp = 0;
  }
  if (clickedOnFridge == 2) {
      sx = sx + 0.01;
    if (sx >= 1) {
      sx = 1;
      clickedOnFridge = 0
    }
  }
}

function drawFridge() {
  push();
  fill(200);
  stroke(130);
  strokeWeight(2);
  translate(325, 90);
  scale(sx, 1);
  rect(-75, 0, 75, 150);
  rect(-75, 80, 75, 130);

  //fridge note
  fill(255);
  rect(-30, 40, 25, 30);
  fill(255,0,0);
  ellipse(-30,40,10,10);
  

  pop();
  if (clickedOnFridge == 1 ) {
    sx = sx - 0.01;
    if (sx <= 0) {
     sx = 0;
    }
  }
}

function drawBackground () {
  
  stroke(0);
  push();

 //top left tile 
  fill(66,31,0);
  beginShape()
    vertex(100,300);
    vertex(170,300);
    vertex(200,320);
  
    vertex(95,320);
    endShape(CLOSE);

    //first row mid left tile
    fill(79,37,0);
    beginShape()
    vertex(170,300);
    vertex(230,300);
    vertex(230,320);
    vertex(160,320);
    endShape(CLOSE);

    //second row left tile
    fill(79,37,0);
    beginShape();
    vertex(95,320);
    vertex(90,340);
    vertex(150,340);
    vertex(180,320);
    endShape();

    //second row left mid tile
    fill(66,31,0); 
    beginShape();
    vertex(150,340);
    vertex(260,340);
    vertex(240,320);
    vertex(160,320);
    endShape(CLOSE);

    //third row left tile
    beginShape();
    vertex(90,340);
    vertex(150,340);
    vertex(140,370);
    vertex(83,370);
    endShape(CLOSE);

    //fourth row left tile
    fill(79,37,0);
    beginShape();
    vertex(135,370);
    vertex(83,370);
    vertex(75,400);
    vertex(130,400)
    endShape(CLOSE);

    //third row left mid tile
    beginShape();
    vertex(150,340);
    vertex(220,340);
    vertex(220,370);
    vertex(134,370);
    endShape(CLOSE);

    //fourth row left mid tile
    fill(66,31,0); 
    beginShape();
    vertex(134,370);
    vertex(220,370);
    vertex(225,400);
    vertex(118,400);
    endShape(CLOSE);

    //first row right mid tile
    beginShape();
    vertex(220,300);
    vertex(270,300);
    vertex(285,320);
    vertex(220,320);
    endShape(CLOSE);

    //second row right mid tile 
    fill(79,37,0);
    beginShape();
    vertex(285,320);
    vertex(220,320);
    vertex(220,340);
    vertex(300,340);
    endShape(CLOSE);

    //third row right mid tile
    fill(66,31,0); 
    beginShape();
    vertex(220,340);
    vertex(300,340);
    vertex(321,370);
    vertex(220,370);
    endShape(CLOSE);

    //fourth row right mid tile
    fill(79,37,0);
    beginShape();
    vertex(321,370);
    vertex(220,370);
    vertex(220,400);
    vertex(342,400);
    endShape(CLOSE);

    //first row right tile
    beginShape();
    vertex(270,300);
    vertex(325,300);
    vertex(340,320);
    vertex(285,320)
    endShape(CLOSE);

    //second row right tile 
    fill(66,31,0); 
    beginShape();
    vertex(340,320);
    vertex(285,320);
    vertex(300,340);
    vertex(355,340);
    endShape(CLOSE);

    //third row right tile
    fill(79,37,0);
    beginShape();
    vertex(300,340);
    vertex(355,340);
    vertex(377,370);
    vertex(321,370);
    endShape(CLOSE);

    //fourth row right tile 
    fill(66,31,0); 
    beginShape();
    vertex(377,370);
    vertex(321,370);
    vertex(343,400);
    vertex(400,400);
    endShape(CLOSE);
  
    //fridge
    strokeWeight(1);
    fill(255);
     rect(250,90,75,210);
   line(250, 135, 325, 135);

   line(250, 195, 325, 195);
   line(250, 220, 325, 220);
   line(250, 245, 325, 245);
   line(250, 270, 325, 270);

   //apples
   fill(255,0,0);
   ellipse(280,260,15,15);
   ellipse(310,260,15,15);
   ellipse(300,260,15,15);
   stroke(0,255,0);
   line(280,247,280,253);
   line(310,247,310,253);
   line(300,247,300,253);

   stroke(0); 
   fill(252,95,35);
   ellipse(260,210,15,15);
   ellipse(270,210,15,15);
   ellipse(290,210,15,15);
   stroke(0,255,0);
   line(260,205,260,200);
   line(270,205,270,200);
   line(290,205,290,200);

   stroke(0);

  //fridge sections
   line(0, 40, -75, 40);
   line(0, 20, -75, 20);
   line(0, 100, -75, 100);
   line(0, 130, -75, 130);
   line(0, 160, -75, 160);
   line(0, 190, -75, 190);

   //bottom right angle
   line(325,300,400,400);

   //bottom left angle 
   line(100,300,75,400);

   //going up
   line(100,300,100,200);

    //fridge weird angle
    fill(255);
    beginShape();
    vertex(250,90);
    vertex(240,110);
    vertex(240,200);
    vertex(250,200);
    endShape(CLOSE);
 
   //straight thru fridge
   line(100,170,325,170);

   //left cabinet
   fill (45,99,63);
   stroke(7,57,20);
   strokeWeight(2);
   rect(100,200,75,100);
   
   //right cabinet
   fill (45,99,63);
   rect(175,200,75,100);

   //left drawer
   fill (45,99,63);
   rect(100,200,75,25);
    //left knob drawer
    fill(230,193,60);
    ellipse(135,215,18,7);

   //right drawer
   fill (45,99,63);
   rect(175,200,75,25);
    //right knob drawer
    fill(230,193,60);
    ellipse(210,215,18,7);

   //small left cabinet
   fill (45,99,63);
   rect(110,235,55,55);
      //left knob
      fill(230,193,60);
      ellipse(135,265,18,7);

   //small right cabinet
   fill (45,99,63);
   rect(185,235,55,55);
     //right knob
     fill(230,193,60);
     ellipse(210,265,18,7);

   //bottom left counter
   fill(240);
   beginShape();
   vertex(0,330);
   vertex(45,330);
   vertex(100,200);
   vertex(100,170)
   vertex(0,240);
   endShape(CLOSE);

   //bottom left rect straight down
   fill(45,99,63);
   rect(0,330,45,70);

   //bottom angeled cabinet
   fill (45,99,63);
   beginShape();
   vertex(45,330);
   vertex(100,200)
   vertex(100,300);
   vertex(75,400);
   vertex(45,400);
   endShape(CLOSE);


   //rect on counter middle
   fill(240);
   rect(100,110,150,60);

   //above sink rec
   fill(240);
   rect(100,170,150,30);

   //sink
   fill(255);
   strokeWeight(1);
   stroke(235);
   ellipse(175,180,80,25);

   //sink faucet
   stroke(0);
   rect(170,142,6,25);

   //left sink knob
   fill(230,193,60);
   ellipse(152,165,10,10);

   //right sink knob
   fill(230,193,60);
   ellipse(195,165,10,10);

   //window
   fill(188,246,250);
   stroke(255);
   strokeWeight(2);

   beginShape();
   stroke(0);
   vertex(0,220);
   vertex(100,155);
   vertex(100,50);
   vertex(0,70);
   endShape(CLOSE);

  fill(146,209,81);
   beginShape();
   vertex(0,220);
   vertex(100,155);
   vertex(100,120);
   vertex(0,170);
   endShape(CLOSE);

   //window panes
   stroke(0);
   strokeWeight(2);
   line(50,60,50,188);
   line(0,155,100,110);
   fill (0,0,255);

   //above fridge line
   stroke(0);
   strokeWeight(1);
   fill (216,255,251);

   //fridge weird angle
   fill(255);
   beginShape();
   
   vertex(250,90);
   vertex(240,110);
   vertex(240,200);
   vertex(250,200);

   endShape(CLOSE);

   //lamp hanging
   line(200,0,200,70);
   fill(217,116,85);
   ellipse(200,80,20,20);
   fill(217,88,35);
  triangle(200,80,240,100,160,100);

  //right wall
  fill(255,242,214);
  beginShape();
  vertex(310,90);
  vertex(310,0);
  vertex(400,0);
  vertex(400,400);
  vertex(325,300);
  vertex(325,90);
  endShape(CLOSE);
  pop();

}

function mouseClicked() {
  if (mouseX > 150 &&
      mouseX < 250 &&
      mouseY > 74 &&
      mouseY < 150) {
  clickedOnLamp += 1;
} 
  
  if (mouseX > 250 &&
      mouseX < 330 &&
      mouseY > 90 &&
      mouseY < 300) {
    clickedOnFridge += 1;
  }
  
  //scene changer
  if (mouseX > 0 &&
     mouseX < 100 &&
     mouseY < 220 &&
     mouseY > 50) {
    scene = 1;
  }
  
  if (mouseX > 240 &&
     mouseX < 300 &&
     mouseY > 0 &&
     mouseY < 40 && scene == 1) {
    scene = 2;
  }
  
  //scene 2
  if (mouseX > 180 &&
    mouseX < 250 &&
    mouseY > 130 &&
    mouseY < 150 && scene == 1
    ) {
      clicked = !clicked;
    }
  if (mouseX > 30 &&
    mouseX < 90 &&
    mouseY > 185 &&
    mouseY < 215 && scene == 1
    ) {
      clicked1 += 1;
    }
  if (mouseX > 190 &&
    mouseX < 320 &&
    mouseY > 200 &&
    mouseY < 275 && scene == 1
    ) {
      clicked2 += 1;
    }
}
function drawScene1() {
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
    wr -= 0.1
    wg -= 0.1
    wb -= 0.1
    if (wr < 0) {
    wr = 0
    wg = 0
    wb = 0
    }
  }
  if (clicked1 > 1 && clicked1 < 6) {
    drawWeiner(55,200,0.7,wr2,wg2,wb2);
    wr2 -= 0.1
    wg2 -= 0.1
    wb2 -= 0.1
    if (wr2 < 0) {
    wr2 = 0
    wg2 = 0
    wb2 = 0
    }
  }
  if (clicked1 > 2 && clicked1 < 7) {
    drawWeiner(65,200,0.7,wr3,wg3,wb3);
    wr3 -= 0.1
    wg3 -= 0.1
    wb3 -= 0.1
    if (wr3 < 0) {
    wr3 = 0
    wg3 = 0
    wb3 = 0
    }
  }
  if (clicked1 > 3 && clicked1 < 8) {
    drawWeiner(75,200,0.7,wr4,wg4,wb4);
    wr4 -= 0.1
    wg4 -= 0.1
    wb4 -= 0.1
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
  //sun
  push();
  fill("yellow")
  circle(270,10,60)
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
  circle(-9,-2,7);
  circle(-7,-1,7);
  circle(-5,0,7);
  circle(-4,0,7);
  circle(-3,0,7);
  circle(-2,0,7);
  circle(-1,0,7);
  circle(0,0,7);
  circle(1,0,7);
  circle(2,0,7);
  circle(3,0,7);
  circle(4,0,7);
  circle(5,0,7);
  circle(7,-1,7);
  circle(9,-2,7);
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
