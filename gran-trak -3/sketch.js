let boundaries = [];
let boundariesJson;
let player;
let timer;
let startLine;
const ROTATE_AMOUNT = 0.1;

function preload() { 
	loadJSON("boundaries.json", setupBoundaries);
  
}

function setupBoundaries(allBoundaries) {
  
  for (let boundary of Object.keys(allBoundaries)) {
    var currentBoundary = allBoundaries[boundary];
    let gameBoundary = new Boundary(currentBoundary.x, currentBoundary.y);
    boundaries.push(gameBoundary);
	} 
}

function setup() {
  createCanvas(400, 400);
  player = new Player();
  timer = new Timer();
  startLine = new StartLine();
}

function draw() {
  background(0);

  for (let boundary of boundaries) {
  	boundary.draw();
  }
  
  player.update();
  player.draw();
  
  timer.update();
  timer.draw();
  hasPlayerHitBoundary();
  
  
  startLine.draw();
  
  checkPlayerDoneLap();
}

function checkPlayerDoneLap() {

	if (dist(player.x, player.y, startLine.x, startLine.y) < player.r + startLine.r) {
  	timer.playerCompletedLap();
  }
}



function hasPlayerHitBoundary() {
	
  for (let boundary of boundaries) {
  	if (dist(player.x, player.y, boundary.x, boundary.y) < (player.r + boundary.r)) {
      player.respawn();
      timer.reset();
    }
  }

}

function mousePressed() {
	boundaries.push(new Boundary(mouseX, mouseY)); 
}

function keyPressed() {
  
  if (keyCode === 83) {
  	saveJSON(boundaries, 'boundaries.json');
  } else if (keyCode == LEFT_ARROW) {
  	player.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode == RIGHT_ARROW) {
		player.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode == UP_ARROW && player.gear < 4) {
  	player.gear++;
  } else if (keyCode == DOWN_ARROW && player.gear > 1) {
		player.gear--;  
  }
}

function keyReleased() {
	if (keyCode == RIGHT_ARROW  || keyCode == LEFT_ARROW)  {
  	player.rotateAmount = 0;
  } 
}



