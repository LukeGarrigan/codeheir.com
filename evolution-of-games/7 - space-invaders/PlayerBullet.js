class PlayerBullet extends Bullet {
    constructor(x, y) {
        super(x, y);
    }

    update() {
        this.y -= 6;
    }
}