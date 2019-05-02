class Jet {
	// added an is white flag, so we know which bullets to shoot!
  constructor(image, isWhite) {
  	this.x = random(width);
    this.y = random(height);
    this.image = image;
    
    this.angle = 0;
    this.speed = 0.7;
    
    
    this.rotateAmount = 0;
    
    this.bullets = [];
    this.isWhite = isWhite;
    this.score = 0;
  }
  

  update(enemyPlayer) {
    this.goTheWayWereFacing();
    this.constrainToMap();
    

    this.angle += this.rotateAmount;

    // new function to check if player has been hit
    this.processBeingHitByBullet(enemyPlayer);
  }
  
  processBeingHitByBullet(enemyPlayer) {
  
    let enemyBullets = enemyPlayer.bullets;
    // I use 10 as the radius for the ship, you can tweak it
    for (let i = enemyBullets.length - 1; i >= 0; i--) {
    	if (dist(this.x, this.y, enemyBullets[i].x, enemyBullets[i].y) < (10 + enemyBullets[i].r)){ 
        enemyBullets.splice(i, 1);
        enemyPlayer.score++;
      }
    }
  }
  
  goTheWayWereFacing() {
  	this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
  }
  

  constrainToMap() {
    if (this.x < -this.image.width) {
    	this.x = width;
    } else if (this.x > width) {
    	this.x = 0;
    } 
    
    if (this.y > height) {
    	this.y = 0;
    } else if (this.y < -this.image.height) {
    	this.y = height;
    }
  }
  
  
  // when the player shoots add to the bullet array
	shoot() {
  	let bullet = new Bullet(this.x, this.y, this.angle, this.isWhite);
    this.bullets.push(bullet);
  }
  
  draw() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
		rotate(this.angle + HALF_PI);
  	image(this.image, 0, 0);
    pop();
    
    // call to draw and update the buggers
    this.drawBullets();
  }
  
  // draw and update the buggers
  drawBullets() {
    
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].update();
    	this.bullets[i].draw(); 
      
      if (this.bullets[i].timeAlive > 200) {
      	this.bullets.splice(i, 1);
      }
    }
  	
  }
  
}