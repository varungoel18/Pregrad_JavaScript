alert("This is javascript alert");

// let x = 10;
// var y = 3;
// let z = x+y;

// console.log(z);
// empty , parametrized
let z = 0; // global variable
function addOperation(x , y) { 
    z = x+y; // local variable
    return z;
    
}
addOperation(4,5);
console.log(z);                  
// console.log(x);
text = "                  this the the javascript code to be tested            ";
let textLength = text.length;
console.log(textLength);
console.log(text.at(2));
console.log(text.trimStart()); // this is used to remove whitespaces
console.log(text.toUpperCase());
console.log(text.toLowerCase());



let arrayNumber = [1,2,3,4,5,6]

