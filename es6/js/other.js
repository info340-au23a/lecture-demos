'use strict';

console.log("executing other.js");

//console.log(monsterArray[0]);

const monsterArray = ['lions', 'tigers', 'witches'];
console.log("other monsters", monsterArray);

//share this function, make it public
export default function beScary(){
  console.log("BOOOO!");
}

export function trickOrTreat() {
  console.log("trick or treat");
}