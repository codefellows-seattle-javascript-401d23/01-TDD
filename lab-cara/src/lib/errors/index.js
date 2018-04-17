'use strict';

//i dont know if this is for the lab and I got a little lost at 11:20am. 

function Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

Person.prototype.speak() {
  return `Hi, my name is ${this.name}, I am ${this.age} years old and I live in ${this.location}.`;
  }
};

const cara = new Person('Cara', 29, 'Seattle');

//BIND: returns a new function with specified context, basically reassigns that function to a new variable that willl always get called with that specified context. 

const vinicioSpeaks = Person.prototype.speak.bind(randomPerson, 'random message for bind method');
console.log(vinicioSpeaks(), 'BIND METHOD');
