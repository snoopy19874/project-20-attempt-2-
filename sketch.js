var car, wall;
var speed, weight;
var Deform;
function setup() {
  createCanvas(1500,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(800,200,60,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  if(wall.x-car.x < wall.width/2 + car.width/2 ){
    car.velocityX = 0;
    Deform = 0.5 * weight * speed * speed/22500 ;
    if(Deform < 100){
      car.shapeColor = "yellow";
    }
    if(Deform<180 && Deform >100){
      car.shapeColor = "green";
    }
    if(Deform> 180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}