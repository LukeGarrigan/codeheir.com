class Canyon {
    constructor() {
        this.blocks = [];
        this.blockColour = new BlockColour();
        this.initaliseBlocks();
    }

  
    update() {
        this.updateColours();
        for (let i = this.blocks.length - 1; i >= 0; i--) {
            if (this.isSpaceBelow(this.blocks[i], i)) {
                this.blocks[i].moveDown();
            };
        }
    }

    updateColours() {
        for (let block of this.blocks) {
            if (block.y >= height - 40) {
                block.setRgb(this.blockColour.blue);
            } else if (block.y >= height - 80) {
                block.setRgb(this.blockColour.red);
            } else if (block.y >= height - 120) {
                block.setRgb(this.blockColour.yellow);
            }
        }
    }
    
    isSpaceBelow(block, i) {
        if (this.isBottomBlock(block)) {
            return false;
        }

        let isBlockBelow = true;
        for (let i = 0; i < this.blocks.length; i++) {
            if (block.x === this.blocks[i].x && this.blocks[i].y === block.y + 20) {
                return false;
            } 
        }
        return isBlockBelow;
    }

    isBottomBlock(block) {
        if (block.y === height - 20) {
            return true;
        }
        return false;
    }

    draw() {
        for (let block of this.blocks) {
            block.draw();
        }
    }

    initaliseBlocks() {
        let startingY = height - 120;
        for (let i = 0; i < 6; i++) {
            for (let x = 0; x < width; x += 20) {
                let rgbPosition = floor(i / 2);
                this.blocks.push(new Block(x, startingY, this.blockColour.rgbs[rgbPosition]));
            }
            startingY += 20;
        }
    }

   

    removeBlock(x, y) {

        for (let i = this.blocks.length - 1; i >= 0; i--) {
        
            let xPos = this.blocks[i].x + 10;
            let yPos = this.blocks[i].y + 10;
            if (dist(x, y, xPos, yPos) < 10) {
                this.blocks.splice(i, 1);
            }
        }
    }


}