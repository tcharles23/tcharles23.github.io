/*
*0. Sting Manipulation: strings are immutable.That means it can't be changed but 
* there are methods you can use to alter the string. String methods are pure because 
* - you use theses methods when you need 
* methods - toUpperCase, toLowerCase, slice, replace, concat, split,
* 
*
**/

// toUpperCase: to upper case the string
let bigStr = 'lowercase';

console.log(bigStr.toUpperCase());  // prints 'LOWERCASE'

// toLowerCase: to lower case the string
let litteStr = 'BABYSTRING';

console.log(litteStr.toLowerCase()); // prints 'babystring'

// slice: take out elements from a string from (start, end)
let myStr = 'tjcdef3f';
let newStr = myStr.slice(0,2);
console.log(newStr); // prints 'tj'

// length: return the length of the string
let name = 'titus';
console.log(name.length); // prints 5

// replace: replace a element with a element you provides
let replaceStr = ' I will be great!';
let replaceStr1 = replaceStr.replace('great', 'good');
console.log(replaceStr1); // prints 'I will be good'

// concat: join two strings together using the concat method operator and return a new string
let str5 = 'I cant wait';
let str6 = 'to be successful!';
console.log(str5.concat(' ', str6)); // prints I cant wait to be successful!

// split: splits a String object into an array of strings by separating the string into substrings,
// using a specified separator string to determine where to make each split.

let wideStr = 'The Lakers will make a the playoffs next year but I dont know if they going to win the title';
let takeWordsOut = wideStr.split(' ');
console.log(takeWordsOut[1]); // prints Lakers
console.log(takeWordsOut[6]); // prints playoffs


