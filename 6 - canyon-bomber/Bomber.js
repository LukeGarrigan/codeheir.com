class Bomber {

    constructor(direction, bomberImage) {
        this.direction = direction;
        
        if (this.direction == 0) {
            this.x = -100;
        } else if (this.direction == 1) {
            this.x = width + 25;
        }
        this.bomberImage = bomberImage;
        this.y = random(0, 200);
        this.bombs = [];
        this.r = 2.5;
        this.speed = 3;

        this.timeTillNextShot = 0;
        this.score = 0;
    }

    update(blocks) {
        this.timeTillNextShot--;
        if (this.direction == 0) {
            this.x += this.speed;
        } else if (this.direction == 1) {
            this.x -= this.speed;
        }

        this.constrain();

        this.updateBombs(blocks);
    }
    updateBombs(blocks) {
        for (let bomb of this.bombs) {
            bomb.y += 3;

            if (this.direction == 0) {
                bomb.x += this.speed;
            } else if (this.direction == 1) {
                bomb.x -= this.speed;
            }
        }

        this.checkBombCollision(blocks);

    }

    checkBombCollision(blocks) {
        for (let j = this.bombs.length - 1; j >= 0; j--) {
            for (let i = blocks.length - 1; i >= 0; i--) {
                let bomb = this.bombs[j];
                let blockX = blocks[i].x + 10;
                let blockY = blocks[i].y + 10;
                if (dist(bomb.x, bomb.y, blockX, blockY) < this.r + 10) {
                    blocks.splice(i, 1);
                    bomb.resistance--;
                    this.score++;
                    if (bomb.resistance <= 0) {
                        this.bombs.splice(j, 1);
                        break;
                    }
                }
            }
        }
    }



    constrain() {
        if (this.direction == 0 && this.x > width) {
            this.x = -100;
            this.y = random(0, 200);
        } else if (this.direction == 1 && this.x <= -75) {
            this.x = width + 25;
            this.y = random(0, 200);
        }
    }

    draw() {
        this.drawBombs();
        image(this.bomberImage, this.x, this.y, this.bomberImage.width*3, this.bomberImage.height*3);

        this.drawScore();
    }

    drawBombs() {
        for (let bomb of this.bombs) {
            push();
            fill(255);
            ellipse(bomb.x, bomb.y, this.r * 2, this.r * 2);
            pop();
        }
    }

    drawScore() {

        push();

        let x;

        if (this.direction == 0) {
            fill(255, 58, 58);
            x = 100;
        } else if (this.direction == 1) {
            fill(195, 178, 52);
            x = 300;
        }

        textAlign(CENTER);
        textSize(50);
        text(this.score, x, 45);

        pop();
    }

    bomb() {
        if (this.timeTillNextShot <= 0 ) {
            let bomb = {
                x: this.x + 35,
                y: this.y + 20,
                resistance: 4
            }
            this.bombs.push(bomb);

            this.timeTillNextShot = 25;

        }
        
    }
}