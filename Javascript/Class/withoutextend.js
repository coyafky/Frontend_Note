function Animal(leg){
    this.leg = leg;
}

Animal.prototype.walk = function(){
    console.log('Walking on ' + this.leg + ' legs');

}


function Dog(name, leg){
    Animal.call(this, leg);
}


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log('Barking');
}

let dig1 = new Dog('dig1', 4);
dig1.walk();
dig1.bark();