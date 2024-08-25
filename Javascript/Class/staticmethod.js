function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

Person.createAnonymous = function (gender) {
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
};

var anonymous = Person.createAnonymous();
console.log(anonymous.getName()); // "John Doe"