class Bomber {

    constructor() {
        this.x = -10;
        this.y = random(0, 200);
        this.bombs = [];
        this.r = 2.5;
    }

    update(blocks) {
        this.x += 2;
        this.constrain();

        this.updateBombs(blocks);
    }
    updateBombs(blocks) {
        for (let bomb of this.bombs) {
            bomb.y += 3;
            bomb.x += 2;
        }


        for (let j = this.bombs.length - 1; j >= 0; j--) {
            for (let i = blocks.length - 1; i >= 0; i--) {
                let bomb = this.bombs[j];
                let blockX = blocks[i].x + 10;
                let blockY = blocks[i].y + 10;
                if (dist(bomb.x, bomb.y, blockX, blockY) < this.r + 10) {
                    blocks.splice(i, 1);
                    bomb.resistance--;
                    if (bomb.resistance <= 0) {
                        this.bombs.splice(j, 1);
                        break;
                    }
                }
            }
        }
    }

    constrain() {
        if (this.x > width + 20) {
            this.x = -10;
            this.y = random(0, 200);
        }
    }

    draw() {
        this.drawBombs();
        rect(this.x, this.y, 30, 30);


    }

    drawBombs() {
        for (let bomb of this.bombs) {
            ellipse(bomb.x, bomb.y, this.r * 2, this.r * 2);
        }
    }

    bomb() {
        let bomb = {
            x: this.x + 10,
            y: this.y + 20,
            resistance: 4,
        }
        this.bombs.push(bomb);
    }
}