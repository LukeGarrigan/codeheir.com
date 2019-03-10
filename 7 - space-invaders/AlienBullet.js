class AlienBullet extends Bullet {
    constructor(x, y) {
        super(x, y);
    }

    update() {
        this.y += 2;
    }
}