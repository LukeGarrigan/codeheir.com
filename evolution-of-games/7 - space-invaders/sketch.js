
let alienImage;  // 23 * 16
let invaders;
let shooterImage;
let player;
function preload() {
  alienImage = loadImage("invader1.png");
  shooterImage = loadImage("shooter.png");
}
function setup() {
  createCanvas(400, 400);
  invaders = new Invaders(alienImage, 4);
  player = new Player(shooterImage);
}

function draw() {
  background(0);
 
  invaders.update(player);
  invaders.draw();

  player.update();
  player.draw();

  if (player.lives == 0) {
    setup();
  }

}



function mousePressed() {
  invaders.checkCollision(mouseX, mouseY);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW || keyCode == 88) {
    player.moveRight();
  } else if (keyCode === LEFT_ARROW || keyCode == 90) {
    player.moveLeft();
  } else if (keyCode === 32) {
    player.shoot();
  }
}
