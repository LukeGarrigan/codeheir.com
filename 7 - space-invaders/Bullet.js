class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    update() {
        this.y -= 5;
    }
    draw() {
        fill(255);
        rect(this.x, this.y, 3, 10);
    }

}