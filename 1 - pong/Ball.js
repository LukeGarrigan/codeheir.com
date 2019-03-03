class Ball{
 
 
    constructor() {
        this.r = 10;
        this.reset();
    }
     
     
    update(playerScore, aiScore) {
        // if it hits the top or bottom change direction
        if (this.y < this.r || this.y > height - this.r) {
            this.ySpeed = -this.ySpeed;
        } 
        // if it goes to the end of the sreen restart the game
        if (this.x < this.r ) {
          aiScore.increment();
        	this.reset();
        } else if (this.x > width + this.r) {
          playerScore.increment();
          this.reset();
        }
         
        this.x += this.xSpeed;
        this.y += this.ySpeed;
     
    }
     
    reset() {
        this.x = width/2;
        this.y = height/2;
         
        this.xSpeed = random(3, 4);
         
        // determines if it's going left or right
        let isLeft = random(1) > .5;
        if (isLeft) {
            this.xSpeed = -this.xSpeed;
        } 
         
        this.ySpeed = random(-3, 3);
    }
     
    display() {
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
  
    hasHitPlayer(player) {
      if (this.x - this.r <= player.x + player.width && this.x > player.x) {
        if (this.isSameHeight(player)) {
          this.xSpeed = -this.xSpeed;
        }
      }
    }

    hasHitAi(ai) {
      if (this.x + this.r >= ai.x && this.x <= ai.x + ai.width) {
        if (this.isSameHeight(ai)) {
          this.xSpeed = -this.xSpeed;
        }
      }
    }

    isSameHeight(player) {
      return this.y >= player.y && this.y <= player.y + player.height;
    }
     
     
}