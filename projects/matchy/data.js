/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
 
 
 




 
// ## Step 8 - Take Another Break!!


// # Part 2
// **All work in this section will be done in functions.js**

// In this file, we'll create some Functions to work with our data created Part 1, which we coded in the file `data.js`.

// These Functions will pass in all needed parameters, meaning, we will not reach into the global scope to access `animals`.

// ## Step 1 - Search
//  1. Open up the file `functions.js` in your editor.
//  2. Implement a function called `search` with a signature of `search(animals, name) { //... }` that:
//    - Takes a paramater representing an Array of `animals`.
//    - Takes a paramater representing a String, the name of an animal on which to perform a search.
//    - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
//    - Returns `null` if no animal with that name exists
//  3. Use the search bar at the top of the page to make sure your function works.

// ## Step 2 - Replace
//  1. Write a function called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//    - Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents the replacement animal.
//    - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//    - Otherwise do nothing.
//  2. Test it on the website.

// ## Step 3 - Remove
//  1. Write a function called `remove` with a signature of `remove(animals, name)` that:
//    - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//    - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.

// ## Step 4 - Add
//  1. Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
//    - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//    - Checks that the animal Object has a `name` property with a length > 0.
//    - Checks that the animal Object has a `species` property with a length > 0.
//    - Has a **unique** name, meaning no other animals have that name.
//    - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//    - Make sure it works.

// This is called **data validation** and it's extremely important in web development!
 
// ## Step 5 - Break
// **Step back and think about how far you've come!!** We are doing really hard stuff and if you've gotten here, you get it! This is awesome! It means you are well on your way to becoming a **pro web developer**. SWEET!\
 
 
 //  // ## Step 1 - Object Creation
//  1. [ x] Open up the file data.js.
//  1. [ x] Create a variable named `animal` and assign it to an empty object.
//  1. [ x] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
//  1. [ x] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
//  1. [ x] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
//  1. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
//  1. [] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what `animal` looks like.
//  1. [] It should be something like: 
// ~~~JS
// { species: 'duck', name: 'Jennifer', noises: [] }
// ~~~

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "name";
animal["name"] = "TJ";
animal.noises = [];
console.log(animal);


// ## Step 2 - Array Creation
//  1. [x] Create a variable named `noises` and assign it to an empty array.
//  2. [x ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
//  3. [ x] Using an array function add another noise to the end of `noises`.
//  4. [ x] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
//  5. [ x] Look through the functions until you find the one that will place an element at the begining of the array.
//  6. [ x] Add an element to `noises` using this function.
//  7. [ x] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
//  8. [ x] `console.log` the length of `noises`
//  9. [ x] `console.log` the last element in `noises` again without hard coding the index.
//  10. [x ] `console.log` the whole array.
//  11. [x ] Does it look right?
 


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Brrrr"; 
noises.push("rrrraarrr");
noises.unshift("reddffddd");
noises[noises.length] = "bobwbwbw";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);




// / ## Step 3 - Combining Step 1 and 2
// //  1. [ x] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
// //  2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
// //  3. [ ] `console.log` `animal`.
// //  4. [ ] Does it look right?




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal["noises"].push("gygygyg");
console.log(animal);
 

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * use bracket  or dot notation
 * 2. What are the different ways of accessing elements on arrays?
 * use bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */
 
 

 
 // ## Step 6 - A Collection of Animals
//  1. [x ] Create a variable named `animals` and assign it to an empty array.
//  2. [x] `push` our `animal` that we created to `animals`.
//  3. [x ] `console.log` `animals`. What does it look like?
//  4. [ x] Create a variable called `duck` and assign it to the data:
//   - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
//  5. [ x] `push` `duck` to `animals`
//  6. [x ] `console.log` `animals`. What does it look like?
//  7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
//  8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?


//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
// console.log(animals);
var duck = {
 species: 'duck',
 name: 'Jerome', 
 noises: ['quack', 'hank', 'sneeze', 'woosh']
};

animals.push(duck);
// console.log(animals);

var dog = {
 species: "dog",
 name: "Billy",
 noises: ['brra', 'yewfe']
};

animals.push(dog);
var cat = {
 species: 'cat',
 name: 'Ryan',
 noises: ['meowww', 'csres']
};

animals.push(cat);
console.log(animal);
console.log(animal.length);




// ## Step 7 - Making Friends

// Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

//  1. [ x] Choose a data structure for this **list** of friends.
//  2. [x ] Write a comment in your code that explains why you chose this data structure.
//  3. [ x] Create a variable called `friends` and assign it to the data structure that you chose.
//  4. [ x] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//  5. [ x] Write a function called `getRandom` that takes our `animals` array and returns the `index` of a random element using `Math.random`
//  6. [ x] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
//  7. [ x] `console.log` `friends`.
//  8. [ x] add `friends` as a **property** named `friends` on one of the animals in `animals`
//  9. [ x] `console.log` your work.



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
function getRandom(animals) {
 return Math.floor(Math.random() * Math.floor(animals.length));
 
}
var randomAnimal = getRandom(animals);
friends.push(animals[randomAnimal].name);
// console.log(friends);
// animals.push(friends);
animals[1].friends = friends;
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
