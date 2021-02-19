// Expressions - function expression
// The main difference between a function expression and a function declaration 
// is the function name, which can be omitted in function expressions to create anonymous functions.

const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
console.log(factorial(3))

const getRectArea = function(width, height) {
    return width * height;
};
  
// console.log(getRectArea(3, 4)); // expected output: 12
  

// Program to Print Cube Root of Numbers
function map(f, a) {
    let result = []; 
    let i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

const f = function(x) {
    return x * x * x;
}

let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);


// Named function expression
let math = {
    'factit': function factorial(n) {
      console.log(n)
      if (n <= 1) {
        return 1;
      }
      return n * factorial(n - 1);
    },
    'Addition' : function add(n){
        return n+n;
    }
};

let x = function (a, b) {return a * b};
console.log(x(4, 3));
console.log(math.Addition(23));

// Anonymous Functions in JavaScript

x = function () {  
    console.log('It is an anonymous function');  
};  
x();  

// setTimeout() Method 
setTimeout(function () {  
    console.log('Execute later after 1 second')  
}, 1000);  

setTimeout(function () {  
    console.log('Execute later after 7 second')  
}, 7000); 


// clearTimeout() Method
// Refer 02_functions.html


// Arrow Function
let sum = (a, b) => a + b;
// OR
sum = (a, b) => { 
    let result = a + b;
    return result; 
};
console.log(sum(1, 2) ); // 3


// DefaultArgummnet Function
function myFunction(a,b,c=65) {
    return a+b+c;
}
console.log(myFunction(4, 3));


// Var Arg Function
function foo(x, ...args) {
    console.log(x, args, ...args, arguments);
}
console.log(foo('a', 'b', 'c', z='d'));


function add1(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log(add1(1, 2, 3)); // 6
console.log(add1(3, 2)); // 5

  
function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one", "two", "three", "four", "five", "six")
// a one
// b two
// manyMoreArgs [ 'three', 'four', 'five', 'six' ]


function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
      return multiplier * element
    })
} 
console.log(multiply(2, 15, 25, 42));  // [30, 50, 84]


function sortArguments() {
    let args = Array.from(arguments)
    let sortedArgs = args.sort()
    return sortedArgs
}
console.log(sortArguments(5, 3, 7, 1))


// JS Async
//  Callback function

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {     //This is Call Back Function
    console.log('I am callback function');
}

greet('Peter', callMe);


// IIFE (Immediately Invoked Function Expression) 
//  OR
// Anonymous self-invoking function
(function(){
    var y = "Hello";
    console.log(y);
})();

// Named IIFE Function
(function factorial(n) {
    if (!n) {
        return 1;
    }
    return n * factorial(n-1);
})(3);


function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
