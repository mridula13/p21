var wall, car;
var speed, weight, thickness, damage;

function setup() {
  createCanvas(1600,400);
 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80,80,80);
  bullet = createSprite(50, 200, 50, 10);
 }

function draw() {
  background(59,55,7);  
                 
  bullet.velocityX = speed;

  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  
  collide();

  drawSprites();
}

function collide()
{
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2 && damage <= 10)
  {
    wall.shapeColor = rgb(0,255,0);
    bullet.velocityX = 0;
  }
else if(wall.x - bullet.x < wall.width/2 + bullet.width/2 && damage > 10 )
{
    wall.shapeColor = rgb(255, 0, 0);
    bullet.velocityX = 0;
  }   
else
  {
    bullet.shapeColor = rgb(255,255,255);
  }
}