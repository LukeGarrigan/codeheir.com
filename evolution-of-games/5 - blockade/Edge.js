class Edge {
	constructor() {
  
  }
  
  
  draw() {
  	rect(0, 0, 1, height / SCALE);	// left
    rect(0, 0, width / SCALE, 1);   // top
    rect(width / SCALE -1, 0, 1, height /SCALE); // right
    rect(0, height / SCALE -1, width / SCALE , 1); // bottom
  }
}