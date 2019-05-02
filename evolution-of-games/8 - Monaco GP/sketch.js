const MAP_HEIGHT = 800;

let player;

let racers = [];
let carImages = [];

let playerCarImage;

let distance = 0;

function preload() {
  
  // get the other racer images
  carImages.push(loadImage("pink.png"));
  carImages.push(loadImage("green.png"));
  carImages.push(loadImage("lightblue.png"));
  carImages.push(loadImage("red.png"));
  
  playerCarImage = loadImage("teal.png");
}

function setup() {
  createCanvas(400, 400);
  reset();
}

function reset() {

  racers = [];
  player = new Player(playerCarImage);
  
  for (let i = 0; i < carImages.length; i++) {
    racers.push(new Racer(carImages[i]));
  }
  
  distance = 0;
  
}

function draw() {
  background(255);
  fill(170);
  
  // so we follow the players position
  translate(0 , height / 2 - player.y);
  rect(100, -MAP_HEIGHT*2, 200, MAP_HEIGHT*3);
  player.draw();
  player.update();

  
  
  for (let racer of racers) {
    racer.update();
    racer.draw();
    
    if (racer.hasHit(player)) {
      reset();
    }
  }
  
  
  if (keyIsDown(RIGHT_ARROW)) {
    player.moveRight();
  }
  
  
  if (keyIsDown(LEFT_ARROW)) {
    player.moveLeft();
  }
  
  if (keyIsDown(UP_ARROW)) {
    player.accelerate();
  }
  
  
  if (keyIsDown(DOWN_ARROW)) {
    player.decelerate();
  }
  
  distance += player.speed/ 100;
  textAlign(CENTER);
  textSize(40);
  text(floor(distance), 340, player.y);

}



