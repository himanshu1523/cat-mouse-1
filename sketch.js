var cat,mouse;
var catImg1,catRunning,catHappy,mouseImg1,mouseTeasing,mouseHappy;
var garden,gardenImg;

function preload() {
  gardenImg=loadImage("images/garden.png");
  catImg1=loadImage("images/cat1.png");
  catRunning=loadAnimation("images/cat3.png","images/cat2.png");
  catHappy=loadImage("images/cat4.png");

  mouseImg2=loadImage("images/mouse2.png");
  mouseTeasing=loadAnimation("images/mouse3.png");
  mouseHappy=loadAnimation("images/mouse1.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
  garden=createSprite(width/2,height/2,10,10);
  garden.addImage("garden",gardenImg);
 garden.scale=1;

  cat=createSprite(width/2+200,height/2+200,10,10);
  cat.addImage("catSitting",catImg1);
  cat.scale=0.1;

  mouse=createSprite(width/2-200,height/2+200,10,10);
  mouse.addImage('mouseStanding',mouseImg2);
  mouse.scale=0.1;
}

function draw() {
 createEdgeSprites();
    background(255);

    //Write condition here to evalute if tom and jerry collide

    if(keyCode === LEFT_ARROW){
      cat.addAnimation("cat_running",catRunning);
      cat.changeAnimation("cat_running",catRunning);
       
     }

     if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouse_Teasing",mouseTeasing);
      mouse.changeAnimation("mouse_Teasing",mouseTeasing);
      mouse.frameDelay= 25;
    }
   

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here


}
                               




 
 
  
 
 
  

 
 
 
 

