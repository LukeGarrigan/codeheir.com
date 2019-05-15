let bullets = [];
let rockets = [];
let rocketCount = 10;

function setup() {
  createCanvas(400, 400);
  initRockets();
}


function draw() {
  background(0);

  if (rockets.length == 0) {
    rocketCount ++;
    initRockets();
  }

  
  checkCollision();
  drawRockets();
  drawBullets();
  drawMouseCursor();
  drawGems();
  drawTurret();
}

function initRockets() {
  for (let i = 0; i < rocketCount; i++) {
    rockets.push(new Rocket());
  }
}

function checkCollision() {
  for (let i = rockets.length - 1; i >= 0; i--) {
    for (let j = bullets.length - 1; j >= 0; j--) {
      if (dist(rockets[i].x,rockets[i].y, bullets[j].x,  bullets[j].y) < 10) {
        rockets.splice(i, 1);
        break;
      }
    } 
  }
}
function mousePressed() {
  bullets.push(new Bullet());
}


function drawBullets() {
  for (let bullet of bullets) {
    bullet.update();
    bullet.draw();
  }
}


function drawRockets() {
  for (let rocket of rockets) {
    rocket.update();
    rocket.draw();
  }
}


function drawMouseCursor() {
  fill(255);
  rect(mouseX-15, mouseY, 30, 10);
}

function drawGems() {
  
  fill(0, 0, 255);
  // left gems
  rect(70, 340, 4, 10);
  rect(74, 330, 4, 20);
  rect(78, 320, 4, 30);
  rect(82, 325, 4, 30);
  rect(86, 330, 4, 50);
  rect(90, 340, 4, 10);
  
  // right gems
  
  rect(310, 340, 4, 10);
  rect(314, 330, 4, 20);
  rect(318, 320, 4, 30);
  rect(322, 325, 4, 30);
  rect(326, 330, 4, 50);
  rect(330, 340, 4, 10);

}

function drawTurret() {
  noStroke();
  // blue turret
  fill(0, 0, 255);
  rect(190, 310, 20, 10);
  
  // brown base
  fill(139,69,19);
  rect(180, 320, 40, 10);
  rect(165, 330, 70, 10);
  rect(150, 340, 100, 10);
  rect(0, 350, width, 50);
  
  // brown sides
  rect(0, 320, 40, 30);  
  rect(width - 40, 320, 40, 30);
}