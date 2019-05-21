/* 
* Dataytypes:
* 0. In Javascript, it have two different datatypes simple/primitive and 
* complex datatypes.
*
* 1. Simple/Primitive dataypes: 
* - simple datatypes are immutable. they dont hold or collect other values and 
*  it operation on simple values return new simple values. They dont alter the 
* original value. copy by value
*
* - list of simple datatypes: number, string, boolean, Nan, undefined, and null
* 
*
* 2. Complex datatypes:
* - complex datatypes can take in other values so they can be indefinite size. 
* - they are copied by reference when assigning or passing.
* - list of complex datatypes: array, object, and function 
*
*
*3. They differnce between simple and complex datatypes are that simple datatypes dont
* hold or collect value. Complex datatype can take other values can grow into any size.
* - Simple datatypes are copy by value and complex datatypes are copy by Reference
* when assigning or passing it. You cant alter the original simple datatype. 
*
*
*4. The way simple datatypes are copied by value it takes the copy of the data 
* and dont alter the original data. The way complex datatypes are copied by reference it 
* stores the value from another object and it changes the original object.
*
*/

// number: numberic datatype
var num = 5; 

// string: a character datatype stored inside parenthesis 
let str = "this is a string"; 

// boolean:  true or false
console.log(true);
console.log(false);

// NaN: not a number 
// you check type of a value is a number and it will give you back boolean {true or false} 
typeof NaN; // prints 'number'
console.log(isNaN(33)); // prints false
console.log(isNaN('ititi')); // prints true

// undefined: is property of the global object. 
var name;
console.log(name); // prints undefined 

// null: a variable points to no object
var nothing = null; 

// array: is a collection of data stored in braces. []

let arr = [ 1, 2, 3]; 

// object: is collection of key value pairs stored in curly braces. {}
let myObj = { favColor: "blue", FavFood: "pizza"};

// function: its a resusable block code. It take in two parameters with a function body. 
// You use the keyword function with () {};
function realName(name1, name2) {
    
    console.log(name1 + ' ' + name2);
   // run code here 
}
console.log("titus", "charles"); // prints titus charles 

// infinity: its a numberic value representing infinity 
// -infinity: its a number value representing negative infinity.

console.log(Infinity); // prints Infinity
console.log(-Infinity); // prints -Infinity
console.log(Infinity +1); // prints Infinity

//copy by value
var money = 1001;
var newMoney = money; // the value stored in money copied into newMoney
newMoney = 3000; // changing the value in newMoney doesnt changed the value assigned to money
console.log(money); // prints 1001

// copy by reference: copying a value stored in a object makes a reference of that data. 
let obj1 = {
    car: 'audi',
    color: 'black',
    speed: 'V6',
};

obj1['speed'] = 'V8'; 
obj1['cost'] = '33,000';

let obj2 = obj1;
obj2['color'] = 'blue';
console.log(obj2); // prints { car: 'audi', color: 'blue', speed: 'V8', cost: '33,000' }