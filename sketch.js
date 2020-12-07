
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    paper = new Paper(100,400,40);
    ground = new Ground(600,450,1300,20);
    box1 = new DustBin(800,420,250,20);
    box2 = new DustBin(680,420,20,150);
    box3 = new DustBin(925,420,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	}
}

