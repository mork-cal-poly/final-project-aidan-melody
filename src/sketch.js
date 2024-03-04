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
    //fridge
   rect(250,90,75,210);
   //bottom left angle
   line(325,300,400,400);
   //bottom left angle 
   line(100,300,75,400);
   //going up
   line(100,300,100,200);
   //straight thru fridge
   line(100,200,325,200);
   //left cabinet
   rect(100,200,75,100);
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

   //above sink rec
    rect(100,110,150,60);

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

   //above fridge line
   line()

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
