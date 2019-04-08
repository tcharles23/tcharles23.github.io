/* 
*
*0.  Operators: 
* -  take action on values.
* 
*
*1. Assignment operators:  = 
* - assigns a value to its left over operand based on the value to  whats on the right operand. 
*
*2. Arithmetic operators: addition (+), subtract (-), divide (/), multiplication (*). 
* - takes a numberical value as their operands and return a new single value.
*
*
*3. Comparsion & Binary comparsion operators:[  <, >, <=, >=,  ===, !== ]
* - compare two values that evaluates to boolean, true or false 
*
*
*4. Logical operators: &&, ||, !.
*- checks to see if both condtions are true. 
*
*
*5. Unary operators: typeof, !, - 
* - is a operator with only one operand
* - flips the truthiness of a value or check
* - can check the type of a value
* - can turn a value negative
* 
*
*6. Ternary operators: condition ? value1 : value2;
* - its a conditional operator thats three operand. 
* - the operator can have one or two values based on a condition
* - if the condition is true, the operator has value of value1 or 
* otherwise it has the value of value2.
*/

// Assignment operator: = 

var name = "mike"; // I assign mike to name.

// Arithmetic operator: { +, - , /, * }

// addition: + 
console.log(5 + 8); // prints 13

// subtract: - 
console.log(20 - 10); // prints 10

// divide: / 
console.log(49 / 7); // prints 7

// Comparsion & Binary comparsion operator: [  <, >, <=, >=,  ===, !== ]

// less than:
console.log(5 < 10); // prints true
console.log(8 < 6); // prints false

// less than or equal to
console.log(6 <= 10); // prints true
console.log(8 <= 5); // prints false

// greater than:
console.log(8 > 3); // prints true
console.log(4 > -1); // prints false

// greater than or equal to
console.log(5 >= 4); // prints true
console.log(7 >= 33); // prints false 

// strict equal to: === 
console.log(98 === 98); // prints true
console.log(22 === "22"); // prints false

// srictly not equal to : !== 
console.log( 2 !== 3); // prints true
console.log(2 !== 2); // prints true


// Logical operators: { &&, ||, ! }

// And operator: && 
// both conditions have to be true
console.log(5 > 4 && 67 < 100); // prints true
console.log("titus" === "titus" && 5 < 2); // prints false

// Or operator: || 
// one of the condtions have to be true
console.log(21 > 5 || 5 < 2); // prints true
console.log(44 < 32 || 55 > 111); // prints false

// Bang operator: !
// flips the truthiness of the value
console.log(!true); // prints false
console.log(!false); // prints true

// Unary operator: typeof
// it will give you back a string of type of datatype the value is 
console.log(typeof 2); // prints "number"
console.log(typeof "2"); // prints "string"

// Ternary operator: condition ? value1 : value2
// based on the condition is true
var age = 19;
var club_eligible = (age < 21) ? "Too young" : "Old enough";
console.log(club_eligible); // prints "Too young"
