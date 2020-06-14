function Box(x, y) {
    this.x = x;
    this.y = y;
}

Box.prototype.getTopBox = function () {
    if (this.y === 0) {
        return null;
    } else {
        return new Box(this.x, this.y - 1);
    }
};

Box.prototype.getRightBox = function () {
    if (this.x === 3) {
        return null;
    } else {
        return new Box(this.x + 1, this.y);
    }
};

Box.prototype.getBottomBox = function () {
    if (this.y === 3) {
        return null;
    } else {
        return new Box(this.x, this.y + 1);
    }
};

Box.prototype.getLeftBox = function () {
    if (this.x === 0) {
        return null;
    } else {
        return new Box(this.x - 1, this.y);
    }
};

Box.prototype.getNextdoorBoxes = function () {
    return [
        this.getTopBox(),
        this.getRightBox(),
        this.getBottomBox(),
        this.getLeftBox()
    ].filter(box => box !== null);
};

Box.prototype.getRandomNextdoorBox = function () {
    const nextdoorBoxes = this.getNextdoorBoxes();
    return nextdoorBoxes[Math.floor(Math.random() * nextdoorBoxes.length)];
};


