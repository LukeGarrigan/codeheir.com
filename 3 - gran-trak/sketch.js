let boundaries = [];
let player;
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
  player.update();
  player.draw();
  
  for (let boundary of boundaries) {
    boundary.checkCollision(player);
  	boundary.draw();
  }
  
  timer.update();
  timer.draw();
  
  startLine.draw();
}

function mousePressed() {
	boundaries.push(new Boundary(mouseX, mouseY)); 
}



function keyPressed() {
    // player clicks 's' it saves the boundaries to a file
  if (keyCode === 83) {
  	saveJSON(boundaries, 'boundaries.json');
  }
  else if (keyCode == LEFT_ARROW) {
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