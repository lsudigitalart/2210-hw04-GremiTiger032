function setup(){
    createCanvas(600, 600)
    noCursor();
    circleSize = 50;
    sqX = 200;
    sqY = 200;
    sy = height;
    cx = width / 2.6;
    cy = height / 2.6;
    cd = 150;
    cc = color(0, 255, 0);
    difficulty = 1;
    circleShot = false;
    fire = false;
    sx = -10;
}

var circleSize;
var sqX;
var sqY;
let sx, sy;
let cx, cy, cd, cc;
let fire;
let difficulty;
let circleShot;
let   img;

function draw(){
    background(123, 13);

    fill(255);
 
    ellipse(mouseX, mouseY, circleSize);

    if(mouseX > 200 - circleSize/2&& mouseY < 400 + circleSize/2){
    if(mouseY > 200 - circleSize/2 && mouseY < 400 + circleSize/2){
    fill(255, 0, 0); 
    difficulty-= 1;
    }
}

    square(200, 200, 200  )


    if(fire) {
        fill(0);
        square(sx, sy, 5)
        sy = sy - 25;
        print("FIRE!")
      }
     
      if(sy < 0) {
        fire = false;
        sy = height;
      }
    
      if(dist(sx, sy, cx, cy) < cd) {
        cc = color(255, 0, 0);
        fire = false;
        circleShot = true;
        sx = -10;
        sy = -10;           
      }
    
      fill(cc);
      square(cx, cy, cd)
    
      cx = cx + difficulty;
    
      if(cx >= width) {
        cx = -cd/2;
        cc = color(0, 255, 0);
      }
    
      if(circleShot) {
        difficulty+=1;
        circleShot = false; 
      }
    
      fill(0)
      textSize(25);
      text(difficulty, 10, 25)
      text("The Blur Zone", 200, 20)
      text("Try to stop the green square! ", 140, 540)
      
      textSize(15);
      text("Shoot it with the spacebar to speed it up, touch the square to reverse it, but be careful! ", 14, 570)
    
    }
    
    function keyPressed() {
      if(key == " ") {
        fire = true;
        sx = mouseX;
      }
}