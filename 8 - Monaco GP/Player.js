class Player {
  constructor(playerImage) {
    this.playerImage = playerImage;
    this.x = width / 2;
    this.y = height / 2;
    
    
    this.carWidth = this.playerImage.width * 0.4;
    this.carHeight = this.playerImage.height * 0.4;
    
    this.speed = 0;
  }
  
  
  draw() {
    
    push();
    imageMode(CENTER);
    image(this.playerImage, this.x, this.y, this.carWidth, this.carHeight);
    pop();
  }
  
  update() {
    
    this.y-=this.speed;
    
    if (this.y <= -MAP_HEIGHT) {
      this.y = 0;
    }
    

  }
  
  
  moveLeft() {
    if (this.x > 110) {
      this.x-=2;
    }
  }
  
  
  moveRight() {
    if (this.x < 290) {
      this.x+=2;
    }
  }
  
  accelerate() {
    if (this.speed < 10) {
      this.speed += 0.05;
    }
    
  }
  
  
  decelerate () {
    
    if (this.speed > 0.1 ) {
      this.speed -= 0.05;
    }
    
  }

  
}