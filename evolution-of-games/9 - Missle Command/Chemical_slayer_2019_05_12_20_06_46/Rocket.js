class Rocket {
  
  constructor() {
    this.x = random(width);
    this.y = random(-40, 0);
    
    this.startX = this.x;
    this.startY = this.y;
    

    this.angle = atan2(this.startY - 300, this.startX - random(100, 300)) + PI;
  }
  
  
  update() {
    this.x += 0.5 * cos(this.angle);
    this.y += 0.5 * sin(this.angle)
  
  }
  
  draw() {
    fill(255, 100, 100);
    
    push();
    stroke(255, 100, 100);
    strokeWeight(5);
    line(this.startX, this.startY, this.x, this.y);
    pop();
    ellipse(this.x, this.y, 5, 5);

  }

}