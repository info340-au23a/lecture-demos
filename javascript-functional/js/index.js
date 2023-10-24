'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

const howToSortByHeight = function(personA, personB) {
  if(personA.height < personB.height) {
    return -1; //person A is shorter, so they come first
  } else if(personB.height < personA.height) {
    return 1; //person B is shorter, so they come first 
  } else {
    return 0;
  }
}

//going on in th ebackground
// function forEach(callback){
// }

// for(const personObj of peopleArray) {
//   console.log(personObj);
// }

// peopleArray.forEach(function(item) {
//   console.log(item);
// });

const getHeight = function(personObj){
  const transformed = personObj.height;
  return transformed;
}

//new array       =   old array .map transformFunc
const heightArray = peopleArray.map(function(personObj){
  const transformed = personObj.height;
  return transformed;
});

const peopleNames = peopleArray.map(function(peopleObj) {
  const transformed = peopleObj.name;
  return transformed;
})

console.log(peopleNames);

const peopleGreetings = peopleNames.map(function(name) {
  return "Hi "+name+"!";
})

console.log(peopleGreetings);

const dNames = peopleNames.filter(function(name) {
  return name.startsWith('D');
})

console.log(peopleNames);
console.log(dNames);

// peopleArray.sort(function(personA, personB) {
//   if(personA.height < personB.height) {
//     return -1; //person A is shorter, so they come first
//   } else if(personB.height < personA.height) {
//     return 1; //person B is shorter, so they come first 
//   } else {
//     return 0;
//   }
// });
// console.log(peopleArray);



// const myArray = [1,2,3];

// const myFunction = function(person) {
//   console.log("Hello, "+person);
// }

// myFunction("Bob");

// const bobObj = {};

// function sayHi() {
//   console.log("I'm Bob");
// }

// bobObj.name = "Bob";
// bobObj.sayHi = sayHi;
// console.log(bobObj);
// bobObj.sayHi();



const link = function(accumulation, newItem) {
  const newAccumulation = accumulation + "->" + newItem;
  return newAccumulation;
}

const letters = ['a','b','c','d','e'];  //an initial array

const linked = letters.reduce(function(accumulation, newItem) {
  const newAccumulation = accumulation + "->" + newItem;
  return newAccumulation;
}, ""); 




function sayHello(nameStr) { 
  console.log("Hello, "+nameStr);
}

// sayHello();

// sayHello(6);

function sayGoodbye(name) {
  console.log("Goodbye, "+name);
}

function singSong(name) {
  console.log("Hi "+name);
  console.log("Do you want to hear a song?")
  console.log("Ba ba black "+name);
}


// console.log("calling sayHello");
// sayHello("First");

// function talkToBob(talkingFunction) {
//   talkingFunction("Bob");
// }

// talkToBob(sayHello);
// talkToBob(sayGoodbye);
// talkToBob(singSong);

// // //takes ANOTHER FUNCTION as an arg
// // //will call the arg function, 
// // //passing it "world"
// // function doWithWorld(aFunction) {
// //   aFunction("world");
// // }



// // //call function and pass value
// // doWithWorld(sayHello); //"Hello world"

// console.log( Math.sqrt )

function doTogether(firstCallback, secondCallback){
  firstCallback();  //execute the first function
  secondCallback();  //execute the second function
  console.log('at the "same time"!');
}

function patHead() {
  console.log('pat your head');
}

function rubBelly() {
  console.log('rub your belly');
}

// const resultOfPatting = patHead();
// // console.log(resultOfPatting);
// doTogether(patHead, rubBelly());
