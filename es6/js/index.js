'use strict';

import { trickOrTreat } from './other.js';

import beScary from './other.js';

const monsterArray = [
  {name: 'Dracula', type: 'vampire', height: 64},
  {name: 'Frankenstein', type: 'zombie', height: 74},
  {name: 'Mr. Hyde', type: 'mad scientist', height: 69},
  {name: 'Mummy', type: 'mummy', height: 69},
  {name: 'Creature from the Black Lagoon', type: 'fish', height: 71}
]
console.log(monsterArray);

trickOrTreat();
beScary();

// function foo(params) {
//   return 'foo '+params;
// }

// const foo = function(params) {
//   return 'foo '+params;
// }

// const foo = (params) => {
//   return 'foo '+params;
// }

// const foo = (params) =>  'foo '+params;




// const foo = (params) => 'foo '+param1+' '+param2;

// console.log(foo("boo", "ahhh"));


const personObj = {name: 'Joel', age: 'old', height: 'short'}

const {name, height} = personObj;

const myObject = {b: 2, c: 3, d: 4};
const {b, c, apple} = myObject; //myObject.a to a, etc.
// console.log(apple); //=> 1
// console.log(b); //=> 2;
// console.log(c); //=> 3;


function getBMI(personObj){
  const {height, weight} = personObj;
 
  return 703*weight/(height*height);
}

// const originalArray = ['a', 'b', 'c', 'd'];

// const newArray = ['blank', ...originalArray, 'e', 'f'];

// console.log(newArray);

// const person = {name: 'Ada', height: 64, weight: 135}

// const copyOfPerson = { ...person }; //clone an object!

// console.log(copyOfPerson);

// const personWithHat = {...person, name: 'glenda', hat: 'witch',};
// console.log(personWithHat);

// const fakeCopy = person;
// fakeCopy.fake = true;
// console.log(person);

// console.log('a', 'b', 'c');