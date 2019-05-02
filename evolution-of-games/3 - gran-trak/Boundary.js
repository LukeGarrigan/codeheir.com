class Boundary{
	constructor(x, y) {
  	this.x = x;
    this.y = y;
    this.r = 5;
  }
  
  draw() {  
  	ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  checkCollision(player) {
    if (dist(player.x, player.y, this.x, this.y) < (player.r + this.r)) {
      player.respawn();
      timer.reset();
      
    }
  }
}