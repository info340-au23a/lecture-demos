'use strict';

// console.log("Hello INFO 340");
// console.log("This is JavaScript");
// console.log("line 3");

// // const x = "hello";
// // x = 42;
// // console.log(x);

// let hoursSlept; 
// console.log(hoursSlept);
// console.log( 3 / 4 );

// const lettersArray = ['a', 'b', 'c'];

// console.log(lettersArray);
// console.log(lettersArray[5]);
// lettersArray[5] = 'f';
// console.log(lettersArray);
// lettersArray.push('z');
// console.log(lettersArray);

// const agesObj = {sarah:42, amit:35, zhang:13}
// console.log(agesObj);

// const numWords = {1:'one', 2:'two', 3:'three'}

// //global function to get the keys of an object
// const keys = Object.keys(numWords) //[ '1', '2', '3' ]
// console.log(keys);

// agesObj['fred'] = 19;
// console.log(agesObj);

const dailySleep = {
  day: "Wednesday", 
  hoursSlept: 6
};

console.log("My daily sleep is: ", dailySleep);

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144, pronoun: 'She/her'},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

// for(let i=0; i<peopleArray.length; i++){
//   const person = peopleArray[i];
//   console.log(person);
// }

//Java: for(object person : peopleArray) {}
//Python: for person in peopleArray: 

for(const person of peopleArray) {
  console.log(person.name);
}


function greet(greeting, name){
  return greeting  + ", " + name;
}