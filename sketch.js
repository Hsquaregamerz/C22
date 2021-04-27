const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var B,G;

function setup() {
  createCanvas(400,400);

  engine=Engine.create()

  world=engine.world;

  var GS={
    isStatic:true
  }
  G=Bodies.rectangle(200,390,400,20,GS);
  World.add(world,G);


  var BR={
    restitution:1.0
  }
  B=Bodies.circle(200,200,20,BR);
  World.add(world,B);



}

function draw() {
  background(0);  

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(B.position.x,B.position.y,20,20);

  rectMode(CENTER);
  rect(G.position.x,G.position.y,400,20);

}
