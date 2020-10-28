var car
var wall
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,50,50)
  car.velocityX = speed;
  wall = createSprite(1400,200,60,200)
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0,0,0);  
  drawSprites();
  if(car.isTouching(wall)&& (0.5 * weight * speed * speed)/22500 < 100) {
    car.shapeColor = color(0,255,0)
    car.velocityX = 0
  }
  if(car.isTouching(wall)&& (0.5 * weight * speed * speed)/22500 > 180) {
    car.shapeColor = color(255,0,0)
    car.velocityX = 0
  }
  if(car.isTouching(wall)&& (0.5 * weight * speed * speed)/22500 < 180 && car.isTouching(wall)&& (0.5 * weight * speed * speed)/22500 > 100){
    car.shapeColor = color(230,230,0)
    car.velocityX = 0
  }
}