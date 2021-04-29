var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
 thickness = random(22,83);

  bullet = createSprite(150, 200, 50, 50);
  bullet.velocityX=speed;
  bullet.shapeColor="red";

  wall   = createSprite(1500, 200, 60, 100);
  wall.shapeColor="orange";


}

function draw() {
  background(0);

  if(collided(bullet,wall) )
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage>10)
	{
		bullet.shapeColor="green"
	}

	if(damage<10 )
	{
		bullet.shapeColor="red"
	}
  }
	
  
  drawSprites();
 
}
