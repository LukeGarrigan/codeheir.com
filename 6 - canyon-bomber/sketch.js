
let canyon;
let bomber;
let bomber2;

let bomberImage;
let bomber2Image;

function preload() { 
  bomberImage = loadImage("playerOne.png");
  bomber2Image = loadImage("playerTwo.png");
}

function setup() {
  createCanvas(400, 400);
  canyon = new Canyon();
  bomber = new Bomber(0, bomberImage);
  bomber2 = new Bomber(1, bomber2Image);
}

function draw() {
  background(115,113, 236);
  frameRate(25);

  push();
  noStroke();
  fill(112,110, 112);
  rect(0, 0, width, 60 );
  pop();

  canyon.update();
  canyon.draw();

  bomber.update(canyon.blocks);
  bomber2.update(canyon.blocks);

  bomber.draw();
  bomber2.draw();
}


function mouseClicked() {
  canyon.removeBlock(mouseX, mouseY);
}

function keyPressed() {
  if (keyCode === 32) { 
    bomber.bomb();
  } 
  // L for bomb
  if (keyCode === 76) {
    bomber2.bomb();
  }
}





