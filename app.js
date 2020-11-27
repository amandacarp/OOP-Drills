//Step 1:
let person1 = {
    name,
    sayHello(name) {
        console.log(`Hello, my name is ${name}`);
    }
}

let person2 = {
    name,
    sayHello(name) {
        console.log(`Hello, my name is ${name}`)
    }
}

let person3 = {
    name,
    sayHello(name) {
        console.log(`Hello, my name is ${name}`)
    }
}
let person4 = {
    name,
    sayHello(name) {
        console.log(`Hello, my name is ${name}`)
    }
}

let person5 = {
    name,
    sayHello(name) {
        console.log(`Hello, my name is ${name}`)
    }
}

person1.sayHello('Alex');
person2.sayHello('Alexandra');
person3.sayHello('Carolyn');
person4.sayHello('Adam');
person5.sayHello('Roger'); 

//ES5

/* function Person(name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.doStuff = function(){
    console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}`)
}

let p1 = new Person('Alex', 'Redondo Beach', '34')
p1.doStuff();
let p2 = new Person('Alexandra', 'Redondo Beach', '35')
p2.doStuff();
let p3 = new Person('Carolyn', 'Gardena', '29')
p3.doStuff();
let p4 = new Person('Roger', 'Hawthorne', '30')
p4.doStuff();
let p5 = new Person('Adam', 'Gardena', '31')
p5.doStuff();
 */


//ES6
class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    doStuff(){
        console.log(`Hey! My name is ${this.name}. I am ${this.age} and live in ${this.city}`)
    }
}

let p1 = new Person('Alex', 'Redondo Beach', '34')
p1.doStuff();
let p2 = new Person('Alexandra', 'Redondo Beach', '35')
p2.doStuff();
let p3 = new Person('Carolyn', 'Gardena', '29')
p3.doStuff();
let p4 = new Person('Roger', 'Hawthorne', '30')
p4.doStuff();
let p5 = new Person('Adam', 'Gardena', '31')
p5.doStuff();

//Inheritance
class Vehicle {
    constructor(type, man, wheels){
        this.type = type;
        this.man = man;
        this.wheels = wheels;
    }
    aboutVehicle(){
        console.log(`This vehicle is a ${this.type}, it is made by ${this.man} and has ${this.wheels} wheels`)
    }
        
}

class Truck extends Vehicle{
    constructor(type, man, wheels, doors, truckBed){
        super(type, man, wheels);
        this.doors = doors;
        this.truckBed = truckBed;
    }

    aboutVehicle() {
        console.log(`This vehicle is a ${this.type}, it is made by ${this.man} and ${this.wheels} wheels. It has ${this.doors} doors, Truckbed: ${this.truckBed}`)
    }
}

class Sedan extends Vehicle{
    constructor(type, man, wheels, doors, size, mpg){
        super(type, man, wheels);
        this.size = size;
        this.mpg = mpg;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type}, it is made by ${this.man} and ${this.wheels} wheels. It has ${this.doors} doors, The size is ${this.size} and it's mpg is ${this.mpg}`)
    }
}

class Motorcycle extends Vehicle{
    constructor(type, man, wheels, doors, handle){
    super(type, man, wheels)
    this.handle = handle;
    this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This vehicle is a ${this.type}, it is made by ${this.man} and ${this.wheels} wheels. It has ${this.doors} doors, and has ${this.handle}`)
    }
}

let v1 = new Vehicle('Mazda3', 'Mazda', '4')
v1.aboutVehicle();

let v2 = new Truck('F-150', 'Ford', '4', '2', 'Yes')
v2.aboutVehicle();

let v3 = new Sedan('Civic', 'Honda', '4', '4', 'small', '25' )
v3.aboutVehicle();

let v4 = new Motorcycle('Z900', 'Kawasaki', '2', '0', 'handlebars')
v4.aboutVehicle();