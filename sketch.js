
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papperObect, ground, bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	papperObect = new papper(100,320,70,70);
	ground = new Ground(400,680,800,20);
	bin1 = new dustbin(650, 660, 200, 20);
	bin2 = new dustbin(550, 610, 20, 120);
	bin3 = new dustbin(750, 610, 20, 120);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  papperObect.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(papperObect.body,papperObect.body.position,{x:85,y:-85});
	 }
	}