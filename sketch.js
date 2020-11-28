
var monkey , monkey_running
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(400, 400);
   
   monkey = createSprite(80,315,20,20);
  monkey.addAnimation("main", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
}


function draw() {
  background("white");
  
  monkey.collide(ground);
  
   if(keyDown("space")&& monkey.y >= 200){
        monkey.velocityY = -12;
   }
  
//   if(monkey.isTouching(bananaGroup)){
//     bananaGroup.destroyEach();
    
//   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50);
  
  
  drawSprites();
  
  banana();
  obstacles();
}

function banana(){
   if (frameCount % 80 === 0) {
    var banana= createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=400;
    //bananaGroup.add(banana);
   }
}

function obstacles(){
  if (frameCount % 300 === 0) {
    var obstacle= createSprite(200,200,40,10);
    obstacle.y = Math.round(random(330,330));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime=400;
   }
}