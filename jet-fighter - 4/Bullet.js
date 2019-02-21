class Bullet {
	constructor(x, y, angle, isWhite) {
  	this.x = x;
    this.y = y;
    this.angle = angle;
    this.isWhite = isWhite;
    this.speed = 2;
    this.r = 1.5;
    // this bugger was added
    this.timeAlive = 0;
  }
  
  
  update() {
  	this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
    
    this.constrainToMap();
    
    // increment the time alive
    this.timeAlive++;
  }
  
  
  constrainToMap() {
    if (this.x < -this.r) {
    	this.x = width;
    } else if (this.x > width) {
    	this.x = 0;
    } 
    
    if (this.y > height) {
    	this.y = 0;
    } else if (this.y < -this.r) {
    	this.y = height;
    }
  }
  
  
  draw() {
    if (this.isWhite) {
      push();
      noStroke();
      fill(255);
    	ellipse(this.x, this.y, this.r*2, this.r*2);	
      pop();
    } else  {
      push();
      fill(0);
    	ellipse(this.x, this.y, 3, 3);	
      pop();
    }
  }

}