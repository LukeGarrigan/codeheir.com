let blackJet;
let whiteJet;

let blackJetImage;
let whiteJetImage;
const ROTATE_AMOUNT = 0.05;

function preload() {
	blackJetImage = loadImage("black-jet.png");
  whiteJetImage = loadImage("white-jet.png");
}

function setup() {
  createCanvas(400, 400);
  blackJet = new Jet(blackJetImage, false);
  whiteJet = new Jet(whiteJetImage, true);
}

function draw() {
  background(130);
  
  // add the enemy bullets into the update function
  blackJet.update(whiteJet);
  whiteJet.update(blackJet);
  
  blackJet.draw();
  whiteJet.draw(); 
  
  
  textSize(50);
  fill(0);
  text(blackJet.score, 100, 50);
  
  fill(255);
  text(whiteJet.score, 270, 50);
}


function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
  	blackJet.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode === LEFT_ARROW) {
  	blackJet.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode === 68) {
    // d
		whiteJet.rotateAmount = ROTATE_AMOUNT;
  } else if (keyCode === 65) { 
  	// a
    whiteJet.rotateAmount = -ROTATE_AMOUNT;
  } else if (keyCode === 17) {
  	// ctrl
    blackJet.shoot();
  } else if (keyCode === 32) {
  	// spacebar
    whiteJet.shoot();
  }
}

function keyReleased() {
	if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
  	blackJet.rotateAmount = 0;
  } else if (keyCode === 65 || keyCode === 68) {
  	whiteJet.rotateAmount = 0;
  }
}

