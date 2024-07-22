function Hero(name, level){
    this.name = name;
    this.level = level;
    this.shout = function(){
        return `My name is ${this.name}!`;
    }
}

let conan = new Hero('Conan', 100);
let batman = new Hero('Batman', 60);

console.log(conan.shout());
console.log(batman.shout());

console.log(conan);
console.log(batman);

// In the above case, the shout() function has been duplicated in conan and batman objects. 
// This is inefficient and a waste of memory.

// The solution is prototype function

function Villain(name, level){
    this.name = name;
    this.level = level;
}

Villain.prototype.shout = function(){
    return `I am evil ${this.name}`
}

let joker = new Villain('Joker', 60);
let iceman = new Villain('Iceman', 20);

console.log(joker.shout());
console.log(iceman.shout());

console.log(joker);
console.log(iceman);