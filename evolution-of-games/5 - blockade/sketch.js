
const SCALE = 20;
let player;
let ai;
let edge;

function setup() {
  createCanvas(400, 400);
  player = new Player(5, 5, 0, 1);
  ai = new AI();
  edge = new Edge();
}

function draw() {
  scale(SCALE);
  frameRate(4);
  background(0);
  
  player.update();
  player.draw();
  

  ai.move();
  ai.update();
  ai.draw();
  
  edge.draw();
  
  checkCollisions();

}

function checkCollisions() {
	if (player.hasCollided(ai)) {
  	ai.score++;
    reset();
  } else if (ai.hasCollided(player)) {
  	player.score++;
    reset();
  }
}

function reset() {
	ai.reset();
  player.reset();
}


function keyPressed() {
  console.log(keyCode);
	if (keyCode === UP_ARROW || keyCode === 87) {
    if (player.ySpeed != 1) {
    	player.setSpeed(0, -1);
    }
  } else if (keyCode === LEFT_ARROW || keyCode === 65) {  
    if (player.xSpeed != 1) {
    	player.setSpeed(-1, 0);
    }
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    if (player.xSpeed != -1) {
    	player.setSpeed(1, 0);
    }
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    if (player.ySpeed != -1) {
    	player.setSpeed(0, 1);
    }
  }
}