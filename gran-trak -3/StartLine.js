class StartLine {
	constructor() {
    this.x = width / 2 - 10;
    this.y = 40;
    this.r = 4;
  }
  
  draw() {
    push();
  	rect(this.x, this.y, 2, 50);
    pop();
  }

}