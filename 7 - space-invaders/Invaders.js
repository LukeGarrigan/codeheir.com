class Invaders {
    constructor(alienImage, rowsCount) {
        this.alienImage = alienImage;
        this.rowsCount = rowsCount;
        this.direction = 0;
        this.y = 40;
        this.aliens = this.initialiseAliens();
        this.bullets = [];
        this.timeSinceLastBullet = 0;
    }


    update() {
        for (let alien of this.aliens) {
            if (this.direction == 0) {
                alien.x+=0.5;
            } else if (this.direction == 1) {
                alien.x-=0.5;
            }
        }

        this.updateBullets();

        if (this.hasChangedDirection()) {
            this.moveAlienDown();
        }



        if (this.timeSinceLastBullet >= 40) {
            let bottomAliens = this.getBottomAliens();

            this.makeABottomAlienShoot(bottomAliens);
        } 

        this.timeSinceLastBullet++;
        
    }

    updateBullets() {
        for (let bullet of this.bullets) {
            bullet.y += 2;
        }
    }


    hasChangedDirection() {
        for (let alien of this.aliens) {
            if (alien.x >= width - 40) {
                this.direction = 1;
                return true;
            } else if (alien.x <= 20) {
                this.direction = 0;
                return true;
            }
        }
        return false;
    }

    moveAlienDown() {
        for (let alien of this.aliens) {
            alien.y += 10;
        }

    }

    getBottomAliens() {
        let allXPositions = this.getAllXPositions();


        let aliensAtTheBottom = [];
        for (let alienAtX of allXPositions) {
            let bestYPosition = 0;
            let lowestAlien;

            for (let alien of this.aliens) {
                if (alien.x == alienAtX) {

                    if (alien.y > bestYPosition) {
                        bestYPosition = alien.y;
                        lowestAlien = alien;
                    }

                }
            }
            aliensAtTheBottom.push(lowestAlien);
        }

        return aliensAtTheBottom;
    }


    makeABottomAlienShoot(bottomAliens) {
        let shootingAlien = random(bottomAliens);

        let bullet = {
            x : shootingAlien.x + 10,
            y : shootingAlien.y + 10
        }
        this.bullets.push(bullet);
        this.timeSinceLastBullet = 0;
    }



    getAllXPositions() {

        let allXPositions = new Set();
        for (let alien of this.aliens) {
            allXPositions.add(alien.x);
        }
        return allXPositions
    }
    initialiseAliens() {
        let aliens = [];
        let y = 40;
        for (let i = 0; i < this.rowsCount; i++) {
            for (let x = 40; x < width - 40; x += 30) {
                aliens.push(new Alien(x, y, this.alienImage));
            }
            y += 40;
        }
        return aliens;
    }

    draw() {
        for (let bullet of this.bullets) {
            rect(bullet.x, bullet.y,  3, 10);
        }
        for (let alien of this.aliens) {
            alien.draw();
        }

    }

    checkCollision(x, y) {
        for (let i = this.aliens.length - 1; i >= 0; i--) {
            let currentAlien = this.aliens[i];

            if (dist(x, y, currentAlien.x + 11.5, currentAlien.y + 8) < 10) {
                this.aliens.splice(i, 1);
                return true;
            }
        }
        return false;
    }

}