let timer = 0;
let sx = 1;
let clickedOnFridge = 0;
let clickedOnLamp = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(255,242,214);
  drawBackground ();
  drawFridge();
  if (clickedOnLamp == 1 ) {
     fill(230,219,55,100);
     noStroke();
     rect(175,100,50,30);  //change lamp to origin
  }
  if (clickedOnFridge == 2) {
      clickedOnFridge = 0;
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
    sx = sx-.01;
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
   fill (45,99,63,);
   stroke(7,57,20);
   strokeWeight(2);
   rect(100,200,75,100);
   
   //right cabinet
   fill (45,99,63,);
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
   fill(45,99,63,);
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
   stroke(255);
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
   stroke(255);
   strokeWeight(2);
   line(50,60,50,188);
   line(0,155,100,110);
   fill (0,0,255);

   //above fridge line
   stroke(0);
   strokeWeight(1);
   line()
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



}

function mouseClicked() {
  if (mouseX > 150 &&
      mouseX < 250 &&
      mouseY < 100 &&
      mouseY < 150
      ) {
  clickedOnLamp += 1;
} 
  if (mouseX > 200 &&
      mouseX < 400 &&
      mouseY < 150 &&
      mouseY < 350
  ) {clickedOnFridge += 1;

  }
}
