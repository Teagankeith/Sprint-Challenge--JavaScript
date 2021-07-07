// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// It can access internal because it's parent myFunction() has access to internal so there forfore, through inheritence, the nested functions inside also have access to the same methods.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation (param){
  let sum = 0;
  for(let i = 1; i <= param; i++){
    sum += i;
    console.log(sum +" +")
  }
}

console.log(sumation(4));