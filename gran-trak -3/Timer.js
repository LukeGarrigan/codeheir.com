class Timer {
	constructor() {
  	this.x = 180;
    this.y = 150;
    
    this.startTime = Date.now();
    this.currentTime = Date.now();
    this.bestTime = Number.MAX_SAFE_INTEGER;
    
    this.timeSinceLastReset = 0;
  }
  
  
  update() {
  	this.currentTime = (Date.now() - this.startTime) / 1000;
  }
  
  draw() {
    
    this.timeSinceLastReset ++;
    push();
    fill(255);
    textSize(20);
    if (this.bestTime != Number.MAX_SAFE_INTEGER) {
    	text("Best " + this.bestTime, this.x, this.y-40); 
    }
   
    text(this.currentTime, this.x, this.y);
    pop();

  }
  
  playerCompletedLap() {
     if (this.timeSinceLastReset > 400) {
    
      this.timeSinceLastReset = 0;
      if (this.currentTime < this.bestTime) {
        this.bestTime = this.currentTime;
      }

      this.startTime = Date.now();
    }
    
  }
  
  reset() {
    this.startTime = Date.now();
  }
  
  

}