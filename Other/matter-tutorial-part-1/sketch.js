// setup wrap coordinates plugin
Matter.use('matter-wrap');

// just to make it easier to reference the matter library
let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
 
let engine;
let world;
 
let circles = [];
 
let grounds = [];

const GROUND_WIDTH = 300;
 
function setup() {
  createCanvas(400, 400);
 
  // create an engine
  engine = Engine.create();
  world = engine.world;
   
  // is static means it is not affected by gravity
  let groundParams = {
    isStatic: true
  }
  // creates the two grounds
  grounds.push(Bodies.rectangle(0, height - 10, GROUND_WIDTH, 20, groundParams));
  grounds.push(Bodies.rectangle(width, height - 10, GROUND_WIDTH, 20, groundParams));
    
  // creates some circle bodies 
  let ballParams = {
  	restitution: 0.5,
    frictionAir: 0.08
  }
  
  for (let i = 0; i < 1000; i++) {
    let circle = Bodies.circle(random(width), random(-1000, 40), 10, ballParams);
    // set the wrap, so it goes off the screen it reappears
    circle.plugin.wrap = {
      min: { x: 0, y: 0 },
      max: { x: width, y: height }
    };
    circles.push(circle);
  }
   
  // adding the circles and ground to the world
  World.add(world, circles);
  World.add(world, grounds);
   
  // run the engine
  Engine.run(engine);

}
 
function draw() {
  background(255);
   
  // drawing the circles
  fill(100,105,255);
  for (let circle of circles) {
    ellipse(circle.position.x, circle.position.y, 20);
  }
   

  fill(200);
  // the Matter.js uses the mid point of a rectangle as the reference point
  rectMode(CENTER);
  
  for (let ground of grounds) {
    rect(ground.position.x, ground.position.y, GROUND_WIDTH, 20);
  }

}

