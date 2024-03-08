let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawBackground ();
 
}

function drawBackground () {
  
  stroke(0);
  push();

    //top left tile 
    beginShape()
    vertex(100,300);
    vertex(170,300);
    vertex(200,320);
    vertex(95,320);
    endShape(CLOSE);

    //first row mid left tile
    beginShape()
    vertex(170,300);
    vertex(230,300);
    vertex(230,320);
    vertex(160,320);
    endShape(CLOSE);

    //second row left tile
    beginShape();
    vertex(95,320);
    vertex(90,340);
    vertex(150,340);
    vertex(180,320);
    endShape();

    //second row left mid tile
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
    beginShape();
    vertex(285,320);
    vertex(220,320);
    vertex(220,340);
    vertex(300,340);
    endShape(CLOSE);

    //third row right mid tile
    beginShape();
    vertex(220,340);
    vertex(300,340);
    vertex(321,370);
    vertex(220,370);
    endShape(CLOSE);

    //fourth row right mid tile
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
    beginShape();
    vertex(340,320);
    vertex(285,320);
    vertex(300,340);
    vertex(355,340);
    endShape(CLOSE);

    //third row right tile
    beginShape();
    vertex(300,340);
    vertex(355,340);
    vertex(377,370);
    vertex(321,370);
    endShape(CLOSE);

    //fourth row right tile 
    beginShape();
    vertex(377,370);
    vertex(321,370);
    vertex(343,400);
    vertex(400,400);
    endShape(CLOSE);
  
    //fridge
   rect(250,90,75,210);
   fill (255);

   //bottom right angle
   line(325,300,400,400);

   //bottom left angle 
   line(100,300,75,400);

   //going up
   line(100,300,100,200);

   //straight thru fridge
   line(100,200,325,200);

   //left cabinet
   rect(100,200,75,100);
   // fill (45,99,63,);

   //right cabinet
   rect(175,200,75,100);

   //left drawer
   rect(100,200,75,25);

   //right drawer
   rect(175,200,75,25);

   //small left cabinet
   rect(110,235,55,55);

   //small right cabinet
   rect(185,235,55,55);

   //bottom left surface line angle
   line(45,330,100,200);

   //bottom left rect straight down
   rect(0,330,45,70);

   //bottom left angle counter
   line(0,240,100,170);

   //small line connecting left counter to cabinet
   line(100,170,100,200);

   //rect on counter middle
   rect(100,110,150,60);

   //above sink rec
   rect(100,170,150,30);

   //sink
   ellipse(175,180,80,25);

   //sink faucet
   rect(170,142,6,25);

   //left sink knob
   ellipse(152,165,10,10);

   //right sink knob
   ellipse(195,165,10,10);

   //window
   beginShape();

   vertex(0,220);
   vertex(100,155);
   vertex(100,50);
   vertex(0,70);
   endShape(CLOSE);

   //window panes
   line(50,60,50,188);
   line(0,155,100,110);
   fill (0,0,255);

   //above fridge line
   line()

   fill (216,255,251);

   //fridge weird angle
   beginShape();
   
   vertex(250,90);
   vertex(240,110);
   vertex(240,200);
   vertex(250,200);

   endShape(CLOSE);

   //lamp hanging
   line(200,0,200,70);
   ellipse(200,80,20,20);
  triangle(200,80,240,100,160,100);

    

    


 
   
  


}
