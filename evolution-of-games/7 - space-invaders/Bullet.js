class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        fill(255);
        rect(this.x, this.y, 3, 10);
    }

    isOffScreen() {
        return this.y <= 0;
    }

    hasHit(player) {
        return dist(this.x, this.y, player.x + 10, player.y + 10) < 20;
    }

}