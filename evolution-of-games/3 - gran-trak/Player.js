class Player {
	constructor() {
  	this.respawn();
  }
  
  respawn() {
  	this.x = width / 2 + 10;
    this.y = 30;
    this.speed = 1;
    this.angle = 0;
    this.rotateAmount = 0;
    this.r = 7.5;
    
    this.gear = 1;
  }
  
  
  update() {
    this.handleCurrentGearAffectOnSpeed();
    this.goTheWayWereFacing();
    this.angle += this.rotateAmount;
  }
  
  handleCurrentGearAffectOnSpeed() {
  	if (this.speed < this.gear) {
    	this.speed += 0.02;
    } else if (this.speed > this.gear) {
    	this.speed -= 0.02;
    }
  }
  
  goTheWayWereFacing() {
    this.x += this.speed * cos(this.angle);
		this.y += this.speed * sin(this.angle);
  }
  
  
  draw() {
    rectMode(CENTER);
    
    push();
    translate(this.x, this.y);
    rotate(this.angle);
  	rect(0, 0, 15, 15);
 		pop();
    
    push();
    fill(255);
    textSize(40);
    text(this.gear, 110, 150);
    pop();


  }

}

