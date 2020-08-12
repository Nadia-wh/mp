const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var lstone,lmango;
var tree;
var ground;
var boy;
var stone;
var mango,mango1,mango2,mango3,mango4,mango5;
var launcher1;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1050,580);
    ground = new Ground(width/2,600,width,20);
   // boy = new Boy(100,320);
    stone = new Stone(235,420,50);;
    mango=new Mango(1100,100,30);
  //  mango1 = new Mango(670,150);
	 // mango2 = new Mango(640,70);
	 // mango3 = new Mango(700,70);
	//  mango4 = new Mango(620,150);
  //  mango5 = new Mango(720,150);

	launcher1 = new Launcher(stone.body,{x:235,y:440});
	//Engine.run(engine); 
}


function draw() {

  background("white");
  
  image(boy ,200,340,200,300);
  tree.display();
  ground.display();
 // boy.display();
 Engine.update(engine);
  stone.display();
  mango.display();
  //mango.debug=true;
 // mango1.display();
 // mango2.display();
 // mango3.display();
 // mango4.display();
 // mango5.display();

  launcher1.display();

  detectCollision(stone.body,mango.body);
 // detectCollision(stone.body,mango1.body);
 // detectCollision(stone.body,mango2.body);
 // detectCollision(stone.body,mango3.body);
 // detectCollision(stone.body,mango4.body);
 // detectCollision(stone.body,mango5.body);

 // drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	launcher1.fly();
}

function detectCollision(lstone,lmango){
	
  mangoBodyPosition=lmango.position
  stoneBodyPosition=lstone.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.width/2+lstone.width/2)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher1.attach(stone.body);
  }
}