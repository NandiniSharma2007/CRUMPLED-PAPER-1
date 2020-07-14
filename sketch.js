const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
var ground;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  dustbin=new Dustbin(590,670,250,30);
  dustbin1=new Dustbin(450,610,30,150);
  dustbin2=new Dustbin(730.5,610,30,150);
  
paper = new Paper(100,400);
   ground = new Ground(400,700,800,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  drawSprites();
 
}
function keyPressed(){
  if( keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
  }
}



