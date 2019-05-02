class Racer {
  
  constructor(racerImage) {
    this.racerImage = racerImage;
    
    this.x = random (110, 290);
    this.y = random(0, MAP_HEIGHT);
    
        
    this.carWidth = this.racerImage.width * 0.4;
    this.carHeight = this.racerImage.height * 0.4;
    
   
    this.isLeft = false;
    this.isRight = false;
    
    // choose the initial direction
    this.direction = random(1);
    
    if (this.direction > 0.5) {
      this.isLeft = true;
    } else {
      this.isRight = true;
    }
  }
  
  
  draw() {
    
    push();
    imageMode(CENTER);
    image(this.racerImage, this.x, this.y, this.carWidth, this.carHeight);
    pop();
    
    

    let clones = this.getClones();
    for (let clone of clones) {
      push();
      imageMode(CENTER);
      image(this.racerImage, clone.x, clone.y, this.carWidth, this.carHeight);
      pop();
    }
    
    
  }
  
  
  // gets the position of the clones as represented by the diagram above
  getClones() {
    let clones = [];
    let topClone = {
      x: this.x,
      y: this.y + MAP_HEIGHT
    }
    
    let bottomClone = {
      x: this.x,
      y: this.y - MAP_HEIGHT
    }
    
    clones.push(topClone, bottomClone);
    
    
    return clones;
  }
  
  update() {
    this.y-=3;
    
    if (this.y < -MAP_HEIGHT) {
      this.y = 0;
    }
    
    if (this.isLeft) {
      this.x--;
    } else if (this.isRight) {
      this.x++;
    }
    
    
    if (this.x > 290) {
      this.isRight = false;
      this.isLeft = true;
    } else if (this.x < 110) {
      this.isRight = true;
      this.isLeft = false;
    }
    
  }
  
  
  // this is assumming it's a circle, but to be honest we don't really need to be accurate here
  hasHit(player) {
    if (dist(this.x, this.y, player.x, player.y) < 30) {
      return true;
    }
    return false;
  }
  
}