// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

//----------------------

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

  function getLength(arr, cb) {
    return cb(arr);
  }
  const testFunc = function(second){
    console.log(second)
  }

  getLength(items.length,testFunc);

  //----------------------

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  
}
  function last(arr, cb){
    return cb(arr);
  }

  last(items.pop(), function(third){
    console.log(third)
  });

  //----------------------
function add(num1,num2){
  return num1 + num2;
}


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

  //console.log(cb)
  return cb(x, y);
}
console.log(sumNums(2,2,add));

//----------------------
function multiply (num1, num2){
  return num1 * num2;
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  //console.log(m)
  return cb(x, y);
}

console.log(multiplyNums(2,8,multiply));

//----------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


function contains(item, list, cb) {
  
}

if(list.includes(item)){
  return cb(true);
}
else{
  return cb(true);
}
};



//hand to look up help for this




//----------------------

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}


