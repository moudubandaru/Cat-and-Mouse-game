//variable
var bgImg, bg;
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;
function preload() {
    //load the images here
   bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500, 400);
    bg.addImage(bgImg);
    bg.scale = 1.2;

    //create tom and jerry sprites here
    cat = createSprite(700, 550, 150, 120);
    cat.addImage(catImg1);
    cat.scale = 0.3;
    mouse = createSprite(50, 550, 150, 120);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.1;
}

function draw() {
//creating background
    background(0);
    
    cat.debug = true;
    mouse.debug = true;
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        cat.velocityX = -5;
  }
  if(cat.isTouching(mouse)){
      cat.velocityX = 0;
    cat.addImage(catImg1);
    mouse.addAnimation("happyMouse", mouseImg1)
    mouse.changeAnimation("happyMouse");
    cat.addAnimation("happyCat", catImg1)
    cat.changeAnimation("happyCat");
  }
    drawSprites();
}
function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW) {
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.scale = 0.1;
    mouseImg1.destroy();
    mouse.frameDelay = 25;
}
}