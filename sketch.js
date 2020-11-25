const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rod;
var rope1, rope2, rope3, rope4, rope5;
var ball1, ball2, ball3, ball4, ball5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rod = new Rod(350, 100, 500, 50);

	ball1 = new ball(200, 400);
	ball2 = new ball(300, 402);
	ball3 = new ball(400, 400);
	ball4 = new ball(500, 400);
	ball5 = new ball(600, 400);

	rope1 = new Rope(ball1.body, {x: 150, y:100});
	rope2 = new Rope(ball2.body, {x: 250, y:100});
	rope3 = new Rope(ball3.body, {x: 350, y:100});
	rope4 = new Rope(ball4.body, {x: 450, y:100});
	rope5 = new Rope(ball5.body, {x: 550, y:100});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	rod.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x: -560, y: -560});
	}
}




