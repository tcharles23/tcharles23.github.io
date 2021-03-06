
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  let myTriangle = '';
  for(let i = 0; i < num; i++) {
    myTriangle += '#';
console.log(myTriangle);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let i = 1; i <= 15; i++) {
    if(i % 3 === 0 && i % 5 === 0 ) {
      console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    } 
    else {
     console.log(i);
    }
    
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let result = '';
for(let i = 0; i < size; i++) {
  for(let b = 0; b < size; b++) {
    result += (b % 2 === 0) === (i % 2 === 0)? ' ': '#';
  }
 result += '\n';
}
  
console.log(result);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
