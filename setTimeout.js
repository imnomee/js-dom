/*
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
*/

//Set time out using function expressions
window.setTimeout((something)=>{

    console.log(something);
}, 3000, 'This is something.');


//a normal function with two arguments
function add(num1, num2) {
    console.log(num1 + num2);
  }

  //a normal function called using setTimeout
  window.setTimeout(add, 2000, 4, 3);

  //a normal function with 3 arguments
function add(num1, num2, num3) {
    console.log(num1 + (num2 * num3));
  }

  //a normal function called using setTimeout
  window.setTimeout(add, 2000, 4, 3, 4);