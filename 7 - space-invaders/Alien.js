class Alien {
    constructor(x, y, image) {

        this.x = x;
        this.y = y;
        this.image = image;
    }

    draw() {
        image(this.image, this.x, this.y, this.image.width/30, this.image.height/30);
    }

}