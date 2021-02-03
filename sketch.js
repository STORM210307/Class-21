var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  //fixedRect.debug = true;
 // movingRect = createSprite(400,200,80,30);
 // movingRect.shapeColor = "blue";
  //movingRect.debug = true;
car = createSprite(300,300,50,50);
car.shapeColor = "yellow";
car.velocityX = 4;

wall = createSprite(800,300,50,200);
wall.shapeColor = "red";


}

function draw() {
  background(0,0,0);  


//if(isTouching(movingRect, fixedRect)) {
  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";
//}
// if(isTouching(car, wall)) {
//   car.shapeColor = "red";
//   car.velocityX = 0;
//}
bounceOff(car, wall);

  drawSprites();

}

