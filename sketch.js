
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var roof1,rope1,rope2,rope3,rope4,rope5;
var engine, world,bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(600,550);
	bobObject2=new Bob(200,550);
	bobObject3=new Bob(300,550);
	bobObject4=new Bob(400,550);
	bobObject5=new Bob(500,550);

	roof1= new Roof(400,100,600,20);

	rope1 = new Rope(bobObject1.body,{x:600,y:110},-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,{x:200,y:110},-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,{x:300,y:110},-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,{x:400,y:110},-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,{x:500,y:110},-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-50});
		
	}
}

