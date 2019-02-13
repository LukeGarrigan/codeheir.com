class StartLine {
	constructor() {
    this.x = width / 2 - 10;
    this.y = 30;
    this.r = 4;
  }
  
  draw() {
  	rect(this.x, this.y, 2, 40);
  }

}