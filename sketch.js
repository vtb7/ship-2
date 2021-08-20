
var ship_running;
var ship;
var sea;
var seaImg;
function preload()
{
  
seaImg = loadImage("sea.png");
ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){

 createCanvas(400,400)

 
 ship = createSprite(50,160,20,150);
 ship.addAnimation("ship", ship_running);
 ship.velocityX = 4;

 ship.scale = 0.3;

  //create a ship sprite
  sea= createSprite(200,180,100,20);
  sea.addImage("running",seaImg);
  sea.x= sea.width/2;
 
  
  sea.velocityX = -4;
  


  
 }

 function draw() {

  background("yellow");
   if(sea.x< 0) {
     sea.x = sea.width/4;
   }

  drawSprites();




 }