var rect,bullet;
var thickness,speed,weight;
var damage;
var bulletRight,wallLeft



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321)
  damage=(0.5*speed*weight*speed)/(thickness*thickness*thickness);
  rect=createSprite(1000,200,thickness,height/2);
  rect.shapeColor=rgb(80,80,80);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="white"
  bullet.velocityX = speed;
  //bulletRight=bullet.x + bullet.width;
  //wallLeft=wall.x;

}

function draw() {
  background("black");  
  isTouching(bullet,rect);
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  bulletRight=movingRect.x + movingRect.width;
  wallLeft=fixedRect.x;
  if(bulletRight>wallLeft){
    //movingRect.shapeColor = rgb(255, 0, 0);
    movingRect.velocityX=0;
    if(damage>10){
      movingRect.shapeColor = rgb(255, 0, 0);
    }else if(damage<10){
      movingRect.shapeColor = rgb(0,255,0);
    }
    console.log(damage);
    //*/
  }

  //movingRect.velocityX=0;
}