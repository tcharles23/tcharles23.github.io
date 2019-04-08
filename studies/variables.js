/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/* We can also declare variables with var, let, and const. You uses the key words
"var", "let", or "const". 
*/

//var is a global variable. you can reassigned it at anytime. They're always to the top of its scope
var name = "titus";
name = "Tj"; // I reassigned name to Tj
console.log(name); // prints TJ

// let is local scope variable. You can use it like var but It isnt hoisted to the top of its scope.
let favFood = "pizza";
favFood = "chicken wings";
console.log(favFood); // prints chicken wings  

// const is block scope variable. You cant reassigned it and it isnt hoisted to the top of its scope 
const message = "Hey my name is";
message = "slimy shady";
console.log(message); // prints Hey my name is. It wouldnt print "slim shady" because you cant reassign a const varaible

/* Hoisting is what will the computer read first before it excutes your code. 
Before the statements of a program are executed all var and function declaractions are hoisted to the top.
Because of this, var values will not throw a ReferenceErrors if you try referencing them before they are declared
*/
console.log(name); // prints undefined
 var name = "phil"; 
 console.log(name); // prints phil
 
 /* let and const values are not hoisted and therefore if you referencing them before they are declared 
 you will get a ReferenceError.
 */
 console.log(fruit); // prints ReferenceError
 console.log(F); // prints RefereneceError
 
 let fruit = "strawberries";
 const F = "fun";