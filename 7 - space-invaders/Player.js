class Player {
    constructor(shooterImage) {
        this.image = shooterImage;
        this.x = width / 2;
        this.y = height -30;

        this.isMovingLeft = false;
        this.isMovingRight = false;
        this.bullets = [];
        this.lives = 3;
        this.score = 0;
    }

    update() {
        if (this.isMovingRight) {
            this.x += 1;
        } else if (this.isMovingLeft) {
            this.x -= 1;
        }

        this.constrain();

        this.updateBullets();
    }

    updateBullets() {
        
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            this.bullets[i].update();

            if (this.hasHitAlien(this.bullets[i])) {
                this.bullets.splice(i, 1);
                this.score += 10;
                break;
            } else if (this.bullets[i].isOffScreen()) {
                this.bullets.splice(i, 1);
                break;

            }
        }
    }


    hasHitAlien(bullet) {
        return invaders.checkCollision(bullet.x, bullet.y);
    }


    constrain() {

        if (this.x <= 0) {
            this.x = 0;
        } else if(this.x > width - 23) {
            this.x = width - 23;
        }
    }

    draw() {
        image(this.image, this.x, this.y, this.image.width / 20, this.image.height/20);

        this.drawBullets();

        this.drawLives();

        this.drawScore();
    }


    drawBullets() {
        for (let bullet of this.bullets) {
            bullet.draw();
        }
    }


    drawLives() {
        fill(255);
        textSize(15);
        text("LIVES", 250, 25);
        for (let i = 0; i < this.lives; i++) {
            image(this.image, 300 + i * 30, 10, this.image.width / 20, this.image.height/20);
        }
    }

    drawScore() {

        text("SCORE", 50, 25);

        push();
        fill(100, 255, 100);
        text(this.score, 110, 25);
        pop();
    }

    moveLeft() {
        this.isMovingRight = false;
        this.isMovingLeft = true;
    }
    moveRight() {
        this.isMovingLeft = false;
        this.isMovingRight = true;
    }

    shoot() {
        this.bullets.push(new PlayerBullet(this.x + 12, this.y));
    }

}