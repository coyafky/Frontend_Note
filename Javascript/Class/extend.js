class Animal {
    constructor (leg,color) {
        this.leg = leg;
    }
    walk(){
        console.log('Walking on ' + this.leg + ' legs');
    }
}

class Bird extends Animal {
    constructor(leg,color){
        super(leg);
        this.color = color;
        
    }
    fly(){
        console.log('flying');
    }
    getColor() {
		return this.color;
	}
}

let bird = new Bird(2,"white");
bird.walk();
bird.fly();
console.log(bird.getColor());

class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();
// walking on 4 legs
// go walking