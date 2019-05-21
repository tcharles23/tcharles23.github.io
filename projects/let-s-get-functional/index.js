// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-tcharles');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    // console.log(array);
let count = 0;
_.filter(array, function(e, i, array){
    if(e.gender === 'male') {
        count++;
    }
    
});
return count;

};

var femaleCount = function(array) {
    
   let fees =  _.reduce(array, function(total, person, i){
       if(person.gender === 'female') {
           total++;
       }
       return total;
   }, 0);
   return fees;
};

var oldestCustomer = function(array) {
    let oldie = 0;
    let oldestName;
    _.filter(array, function(customer, i, array){
       if(customer.age > oldie)  {
           oldie = customer.age;
       }
    });
    
    _.each(array, function(customer, i, array) {
        if(customer.age === oldie) {
            oldestName = customer.name;
        }
    });
    return oldestName;
};

var youngestCustomer = function(array) {
    let youngin = 0;
    let youngName;
    _.filter(array, function(customer, i, array) {
        if(customer.age > youngin) {
            youngin = customer.age;
        }
    });
    _.filter(array, function(customer, i, array) {
        if(customer.age < youngin) {
            youngin = customer.age;
        }
    });
    _.each(array, function(customer, i, array){
        if(customer.age === youngin) {
            youngName = customer.name;
        }
    });
    return youngName;
};

var averageBalance = function(array) {
    let balance;
let allBalance
let balance1;
let balance2;
let balance3 = [];
_.each(array, (e, i, c) => {
    balance = e.balance.slice(1);
    balance1 = balance[0] + balance.slice(2);
    
    allBalance = balance1.slice(0, 4) + balance1.slice(5, 7);
    
    balance2 = Number(allBalance);
    
    balance3.push(balance2);
    
});
let sum = _.reduce(balance3, (total, num) => total + num, 0);

let averageSum = sum / balance3.length;

let averageSumString = averageSum.toString();

let finalBalance = averageSumString.slice(0, 1) + averageSumString.slice(1, 4) + '.' + averageSumString.slice(4, 6);

return Number(finalBalance);
    
    
    
};

var firstLetterCount = function(array, letter) {
    let namess = [];
    let countUp = 0;
    _.each(array, function(e, i, array) {
      namess.push(e.name); 
    });
    
    _.filter(namess, function(name, i, array) {
        if(name[0].toUpperCase() === letter.toUpperCase()) {
            countUp++;
        }
    });
    return countUp;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let count = 0;
    _.each(array, function(e, i, c){
        if(e.name === customer) {
            _.filter(e.friends, function(friend,i, c){
             if(friend.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
                 count += 1;
             }  
            });
        }
    });
    return count;
};

var friendsCount = function(array, name){
    let count = [];
    _.each(array, function(e, i, c){
     if(e.name !== name) {
         _.filter(e.friends, function(friend, i, c){
             if(friend.name === name) {
                 count.push(e.name);
             }
         });
     }   
    });
    return count;
};

var topThreeTags = function(array) {
    let topTags = [];
    let counter = {};
    for(let i = 0; i < array.length; i++) {
        for(let b = 0; b < array[i].tags.length; b++) {
            let customerTag = array[i].tags[b];
            if(counter[customerTag]) {
                counter[customerTag]++;
                
            }
            else {
                counter[customerTag] = 1;
            }
        }
    }
    
    let order = [];
    for(let key in counter) {
        order.push([key, counter[key]]);
        
    }
    let sortedTags = order.sort((a, b) => a[1] - b[1]);
    let topThree = sortedTags.slice(sortedTags.length - 3);
    console.log(topThree);
    topTags.push(topThree[0][0], topThree[1][0], topThree[2][0]);
    console.log(topTags);
    return topTags;
};

var genderCount = function(array) {
    let genders = _.reduce(array, (count, customer) => {
        if(customer.gender === 'male') {
            count.male = (count.male || 0) + 1;
            
        }
        if(customer.gender === 'female') {
            count.female = (count.female || 0) + 1;
            
        }
        if(customer.gender === 'transgender')  {
            count.transgender = (count.transgender || 0) + 1;
            
        }
        return count;
    }, {});
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
