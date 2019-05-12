class Bullet {

  constructor(xDest, yDest) {
    this.x = 200;  // x and y stay the same (It's the position of the turret)
    this.y = 320;
    
    this.xDest = mouseX;
    this.yDest = mouseY;
    
    this.angle = atan2(this.y - this.yDest, this.x - this.xDest) + PI;
    console.log(this.angle);
  }
  
  update() {
    this.x += 5 * cos(this.angle);
    this.y += 5 * sin(this.angle)
  }

  
  draw() {
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  }
}