/* 
*
*0.  Operators: 
* -   Operators can take action on datatypes like assigning them, comparing them, 
* or include them in arthimetic operators. Operators is categorize by 
* what they can do and how many operands they require. Operands are the values that 
* operators act on. 
* Ternary - three values
* Binary  - two values 
* Unary - one values 
* 
*
*1. Assignment operators:  =, +=, -=, *=, /=, %= 
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
*-  && And operator:checks to see if both condtions are true. 
*- || Or operator: checks to see if one of the conditions are true
* - ! Bang operator: flips the value truthiness 
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

// Assignment operator: assign a datatype to a variable 
// the operators: =, +=,-=, /=, %=, *=

// assignment operator: assign a datatype to a variable
// the operator: = 

var name = "mike"; // I assign mike to the variable name.

// additional  assignment operator: adds value assigned to the variable and assigns the result to the variable
// the operator: +=

var score = 0;
score += 5;
console.log(score); // prints  5 

//  subtraction assignment operator: subtracts value assigned to the variable and assigns the result to the variable
// the operator: -=

var total = 100;
total -= 55;
console.log(total); // prints 45

/* multiplication assignment operator: multiplies the value assigned to the variable 
and assigns the result to the variable */ 
// the operator: *=

var addUp = 9;
addUp *= 9;
console.log(addUp); // prints 81

// divison assignment operator: divides the value assigned to the variable and assigns the result to the variable
// the operator: /=

var divDown = 49;
divDown /= 7;
console.log(divDown); // prints 7

// remainder assignment operator: divides the value assigned to the variable and assigns the remainder to the variable
// the operator: %= 

var remainder = 11; 
remainder %= 5;
console.log(remainder); // prints 1


// Arithmetic operator: { +, - , /, * }

// addition: add two numbers. 
// the operator: + 

console.log(5 + 8); // prints 13

// subtract: subtract two numbers. 
// the operator: - 

console.log(20 - 10); // prints 10

// divide: divide two numbers 
// the operator: / 

console.log(49 / 7); // prints 7

// Comparsion & Binary comparsion operator: [  <, >, <=, >=,  ===, !==, /,]

// less than: the number on the left of the less than operator is less than the number of right operator.
// the operator: < 
// returns boolean: true or false. 

console.log(5 < 10); // prints true
console.log(8 < 6); // prints false

// less than or equal to: the number on the left of the operator is less than or equal to the number of right operator
// the operator: <= 
// return boolean: true or false

console.log(6 <= 10); // prints true
console.log(8 <= 5); // prints false

// greater than: the number on the left of the operator is greater than the number of right operator
// the operator: >
// return boolean: true or false

console.log(8 > 3); // prints true
console.log(4 > -1); // prints false

/*greater than or equal to: the number on the left of the operator is greater than or equal to the numnber right of the 
operator.
the operator: >= 
returns booleans: true or false
*/
console.log(5 >= 4); // prints true
console.log(7 >= 33); // prints false 

// strict equal to: checks to see if the datatype is stricty equal to the datatype left of the operator
// the operator: === 
// returns boolean: true or false

console.log(98 === 98); // prints true
console.log(22 === "22"); // prints false

// srictly not equal to : checks to see if the dataype is not strictly equal to the datatype on the left of the operator
// the operator: !== 
// returns booleans: true or false

console.log( 2 !== 3); // prints true
console.log(2 !== 2); // prints false


// Logical operators: { &&, ||, ! }

// And operator: && 
// both conditions have to be true
// returns boolean: true or false

console.log(5 > 4 && 67 < 100); // prints true
console.log("titus" === "titus" && 5 < 2); // prints false

// Or operator: || 
// one of the condtions have to be true
// returns boolean: true or false

console.log(21 > 5 || 5 < 2); // prints true
console.log(44 < 32 || 55 > 111); // prints false

// Bang operator: !
// flips the truthiness of the value
// returns boolean: true or false 

console.log(!true); // prints false
console.log(!false); // prints true

// Unary operator: typeof
// returns a string of type of datatype the value are 

console.log(typeof 2); // prints "number"
console.log(typeof "2"); // prints "string"

// Ternary operator: condition ? value1 : value2
// based on the condition is true
var age = 19;
var club_eligible = (age < 21) ? "Too young" : "Old enough";
console.log(club_eligible); // prints "Too young"
