
class Rocket {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
        console.log(this.body.angle);
        World.add(engine.world, this.body);
    }


    draw() {
        let pos = this.body.position;
        let angle = this.body.angle;


        push();
        fill(150);
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }

    move() {
        let speed = 0.5;

        this.body.position.x += speed * cos(this.body.angle - HALF_PI);
        this.body.position.y += speed * sin(this.body.angle - HALF_PI);



    }

}