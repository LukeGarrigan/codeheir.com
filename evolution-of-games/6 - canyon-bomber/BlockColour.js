class BlockColour {
    constructor() {
        this.yellow = this.createYellow();
        this.blue = this.createBlue();
        this.red = this.createRed();
        this.rgbs = this.intialiseRgbs();
    }
    
    createYellow() {
        return {
            r: 255,
            g: 255,
            b: 0
        }
    }

    createBlue() {
        return {
            r: 8,
            g: 4,
            b: 191
        }


    } 

    createRed() {
        return {
            r: 255,
            g: 100,
            b: 100
        }
    }

    intialiseRgbs() {
        let rgbs = [];
        rgbs.push(this.yellow, this.red, this.blue);

        return rgbs;

    }

}