class Player {

	constructor(x, y, xSpeed, ySpeed) {
		this.startX = x;
    this.startY = y;
    this.startXSpeed = xSpeed;
    this.startYSpeed = ySpeed;
    this.reset(x, y);
    this.score = 0;
  }
  
  
  reset() {
  	this.body = [];
    this.body[0] = createVector(this.startX, this.startY);
    
    this.xSpeed = this.startXSpeed;
    this.ySpeed = this.startYSpeed;  	
    

    
    this.displayScoreTime = 4;

  }
  
  update() {
    this.grow();  
  }

  grow() {
    this.body.push(createVector(this.body[this.body.length-1].x + this.xSpeed, this.body[this.body.length-1].y + this.ySpeed));
  }
  
  

  hasCollided(otherPlayer) {
		return this.hasHitSelf() || this.hasHitWall() || this.hasHitOtherPlayer(otherPlayer);
  }
  
  hasHitSelf() {
    let headPosition = this.body.length - 1;
  	for (let i = 0; i < this.body.length - 1; i++){
    	if (this.body[headPosition].x == this.body[i].x && this.body[headPosition].y == this.body[i].y) {
      	return true;
      }
    } 
  }
  
  hasHitWall() {
  	let head = this.body[this.body.length - 1];
    
    if (head.x <= 0 || head.x >= width / SCALE -1) {
    	return true;
    } else if ( head.y <= 0 || head.y >= height / SCALE -1) {
    	return true;
    }
  }
  
  hasHitOtherPlayer(otherPlayer) {
  	let head = this.body[this.body.length - 1];
  	for (let i = 0; i < otherPlayer.body.length - 1; i++){
    	if (head.x == otherPlayer.body[i].x && head.y == otherPlayer.body[i].y) {
      	return true;
      }
    } 
  }
  
  draw() {
    
    for(let i = 0; i < this.body.length; i++ ) {
      fill(0, 255, 0);
      noStroke();
      

      rect(this.body[i].x, this.body[i].y, 1, 1);  
    }
    
    if (this.displayScoreTime) {
    	this.displayScoreTime--;
      textSize(2);
     	text(this.score, this.startX +1, this.startY); 
    }
  
  }
  
  setSpeed(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
  
  getX() {
  	return this.x;
  }
  
  getY() {
  	return this.y;
  }
}