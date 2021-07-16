var iss,spaceCraft, bg,issimg,scimg,hasDocked = false;
function preload(){
  bg = loadImage("Docking-undocking/spacebg.jpg");
  issimg = loadImage("Docking-undocking/iss.png");
  scing = loadImage("Docking-undocking/spacecraft1.png");
  scing1 = loadImage("Docking-undocking/spacecraft2.png");
  scing2 = loadImage("Docking-undocking/spacecraft3.png");
  scing3 = loadImage("Docking-undocking/spacecraft4.png");

}
function setup() {
  createCanvas(600,350);
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(scing);
  spaceCraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
  
}

function draw() {
  background(bg);
  
  spaceCraft.addImage(scing);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1);

    if(keyDown("up")){
      spaceCraft.y = spaceCraft.y-2;

    }
    if(keyDown("down")){
      spaceCraft.addImage(scing1)
    }
    if(keyDown("left")){
      spaceCraft.addImage(scing3);
      spaceCraft.x = spaceCraft.x-1
    }
    if(keyDown("right")){
      spaceCraft.addImage(scing2);
      spaceCraft.x = spaceCraft.x+1;
    }
  }
  if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("docking Succesful",200,300)
  }
  drawSprites();
}