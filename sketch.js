
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,body;


function setup() {
	createCanvas(windowWidth/2,windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};

	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	sling1 = new Sling(sling1,pendulum1);
	sling2 = new Sling(sling2,pendulum2);
	sling3 = new Sling(sling3,pendulum3);
	sling4 = new Sling(sling4,pendulum4);
	sling5 = new Sling(sling5,pendulum5);

	pendulum1 = new Pendulum(100,200,"red");
	pendulu2 = new Pendulum(150,200,"red");
	pendulum1 = new Pendulum(200,200,"red");
	pendulum1 = new Pendulum(250,200,"red");
	pendulum1 = new Pendulum(300,200,"red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

sling1.display();
sling1.display();
sling2.display();
sling4.display();
sling5.display();

pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
}