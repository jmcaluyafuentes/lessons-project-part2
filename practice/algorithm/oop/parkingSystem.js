class ParkingSystem {
    constructor(small, medium, big) {
        this.small = small,
        this.medium = medium,
        this.big = big
    }

    addCar(carType) {
        if (carType == 'small' && this.small > 0) {
            this.small -= 1;
            return true;
        } else if (carType == 'medium' && this.medium > 0) {
            this.medium -= 1;
            return true;
        } else if (carType == 'big' && this.big > 0) {
            this.big -= 1;
            return true;
        } else {
            return false
        }
    }
}

const parkingSystem = new ParkingSystem(1, 2, 0)
// console.log(parkingSysyem)

console.log(parkingSystem.addCar('small'))
console.log(parkingSystem.addCar('small'))