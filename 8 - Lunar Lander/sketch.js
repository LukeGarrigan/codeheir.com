
var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;

var engine;
var ground;
let isAccelerating = false;

let rocket;

function setup() {
  createCanvas(400, 400);
  // create an engine
  engine = Engine.create();

  rocket = new Rocket(200, 0, 20, 40);

  



  ground = Bodies.rectangle(200, height, 400, 60, {
    isStatic: true
  });

  // add all of the bodies to the world
  World.add(engine.world, [ground]);

  // run the engine
  Engine.run(engine);


  console.log(ground);
}

function draw() {
  background(51);


  fill(200);
  rectMode(CENTER);
  rect(200, height, 400, 60);
  rocket.draw();


  


  if (keyIsDown(76)) {
      rocket.move();
  }
}


function keyPressed() {

  if (keyCode == RIGHT_ARROW) {
    rocket.body.angle += 0.05;
  } else if (keyCode == LEFT_ARROW) {
    rocket.body.angle -= 0.05;
  }
  console.log(keyCode);
}

