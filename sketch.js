var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf;
var appleImage, leafImage; 


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
  
  

} 

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);



  rabbit.position.x = mouseX;
  //rabbit.velocityX = 5;

  if (frameCount % 80 === 0) {

var apple = createSprite (300,100,40,10);
apple.addImage(appleImage);
apple.x = Math.round(random (250,360));
apple.velocityY = 5;
apple.scale = 0.05;

  }



if (frameCount % 120 === 0) {

var leaf = createSprite (100,100,40,10);
leaf.addImage(leafImage);
leaf.x = Math.round(random (50,350));
leaf.velocityY = 2;
leaf.scale = 0.05;

  }

  


drawSprites();

}



