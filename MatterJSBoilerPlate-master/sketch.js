
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ground = Bodies.rectangle(140,60,150,10,{isStatic: true});
	World.add(world,ground)
    bob1 = new Bob(100,110);
	bob2 = new Bob(120,110);
	bob3 = new Bob(140,110);
	bob4 = new Bob(160,110);
	bob5 = new Bob(180,110);

	rope1 = new Rope(bob1.body,ground,-40,0);
	rope2 = new Rope(bob2.body,ground,-20,0);
	rope3 = new Rope(bob3.body,ground, 0,0);
	rope4 = new Rope(bob4.body,ground, 20,0);
	rope5 = new Rope(bob5.body,ground, 40,0);

}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rect(140,60,150,10)
  drawSprites();
  
}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:0});

	}
}



