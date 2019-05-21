//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// console.log(object);
let arr = [];
for(var keys in object) {
    // console.log(object[keys]);
    arr.push(object[keys]);
    // console.log(arr);
}
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // console.log(object);
    // loop through object 
    let str = [];

    for(var key in object) {
    // get keys 
        // console.log(key);
        str.push(key);
        str.toString();
        // console.log(str);
        
    }
    let str2 = str.join(" ")
return str2;
    // put keys in a string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    
    let crazyStr = [];
    // loop through object
    for(var key in object) {
        // console.log(object[key]);
    // get values 
        if(typeof object[key] === typeof "string") {
    
        crazyStr.push(object[key]);
         
        // console.log(crazyStr);
        }
        
    } 
    let newStr = crazyStr.join(" ");
    return newStr;
    
    // get values into a string
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) {
        return 'array';
    }
    return 'object';
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // loop through string
    
        return string[0].toUpperCase() + string.slice(1);
    // for(let i = 0; i < string.length; i++) {
    // // newStr.push(string[0].toUppercase + string[1]);
        
    // }
    
    // capitalize the first index of string
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // loop through string
    let finalStr = [];
    let newStr = string.split(" ");
    //   let splitStr =  string.split(" ");
       for(var i = 0; i < newStr.length; i++) {
         finalStr.push(newStr[i][0].toUpperCase() + newStr[i].slice(1));
    // console.log(finalStr);
       }
       
       return finalStr.join(" ");
   
    // 
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return "Welcome" + " " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // console.log(objectValues(object));
    if(object.hasOwnProperty('noises') && object.noises.length > 0) {
return object.noises.join(" ");
// console.log(allNoises);
    } else {
        return "there are no noises";
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // console.log(string);
    // console.log(word);
    if(string.includes(word)) {
        return true;
    }
   return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // console.log(object);
    // console.log(name);
    
   for(let keys in object) {
      object[keys].push(name);
    //   console.log(object[keys]);
   }
   return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    
  if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
      for(let i = 0; i < object.friends.length; i++) {
          if(name === object.friends[i]) {
              return true;
          }
      } 
  }return false;
  
    // console.log(object['friends']);
    
    
    // if(objectValues(object) === (name)) {
        
    //     return true;
    // }
    // return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    console.log(name);
    // console.log(array);
    // loop through array
   let nofriends = [];
   
    for(let i = 0; i < array.length; i++) {
        
        // console.log(array[i]);
        if(array[i].name !== name && array[i].friends.includes(name) === false) {
            
            nofriends.push(array[i].name);
        }
    } 
        return nofriends;
          
    // check if name isnt a friend 
    // return the list of the non friends 
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
  if(object.hasOwnProperty(key)) {
      object[key] = value;
     
  } else {
      object[key] = value;
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(let key in object) {
        for(let i = 0; i < array.length; i++) {
            if(key === array[i]) {
                delete object[key];
            }
        }
    } return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let newArr = [];
if (!array.length) {
   return newArr;
} else if (array[0] === array[1]) {
   return dedup(array.slice(1));
} else if (array[0] === array[2]) {
   return dedup(array.slice(2));
} else {
   newArr.push(array[0]);
   newArr = newArr.concat(dedup(array.slice(1)));
}   return newArr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}