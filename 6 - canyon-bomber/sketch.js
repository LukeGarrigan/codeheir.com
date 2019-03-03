
let canyon;
let bomber;

function setup() {
  createCanvas(400, 400);
  canyon = new Canyon();
  bomber = new Bomber();
}

function draw() {
  background(0);
  frameRate(30);
  canyon.update();
  canyon.draw();

  bomber.update(canyon.blocks);
  bomber.draw();
}


function mouseClicked() {
  canyon.removeBlock(mouseX, mouseY);
}

function keyPressed() {
  if (keyCode === 32) {
    bomber.bomb();
  }
}





