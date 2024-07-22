function Human(name){
    this.legs = 2;
    this.arms = 2;
    this.head = 1;
    this.name = name;
};

Human.prototype.walk = function(){
    return `Taking a stroll with my ${this.legs} legs.`;
};

function Man(name){
    Human.call(this, name);
}

let homer = new Human('Homer');
console.log(homer);
console.log(homer.__proto__);

let garret = new Man('Garret');
console.log(garret);
console.log(garret.__proto__);

console.log(homer.walk());

// Below line will get TypeError because there is no walk() function defined in the prototype for Man.
//console.log(garret.walk());


// The solution is to explicitly inherit the prototype chain from Human using Object.create to assign Human prototype to Man.prototype.
Man.prototype = Object.create(Human.prototype);
let bob = new Man('Bob');
console.log(bob.walk());