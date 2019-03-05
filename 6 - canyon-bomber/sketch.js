
let canyon;
let bomber;
let bomber2;

function setup() {
  createCanvas(400, 400);
  canyon = new Canyon();
  bomber = new Bomber(0);
  bomber2 = new Bomber(1);
}

function draw() {
  background(0);
  frameRate(30);
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
  console.log(keyCode);
  if (keyCode === 32) {
    bomber.bomb();
  } 
  if (keyCode === 66) {
    bomber2.bomb();
  }
}





