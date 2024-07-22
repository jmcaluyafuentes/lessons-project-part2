class Shape {
    constructor(height, width) {
        this.height = height,
        this.width = width
    }

    area() {
        return this.height * this.width;
    }
}

class Square extends Shape {
    isSquare() {
        if (this.height === this.width) {
            console.log('I am a square!')
        } else {
            console.log('ERR I am not a square!')
        }
    }
}

let sq = new Square(10, 10);
sq.isSquare()
console.log(sq.area())

Shape.prototype.talk = function(input = 'shape') {
    console.log(`I am a talking ${input}`);
}

class Octagon extends Shape {
    talk() {
        super.talk('octagon');
    }
}

let oct = new Octagon(4, 9);
oct.talk();
sq.talk();
console.log(sq);
console.log(oct);

