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

var x = function (a, b) {return a * b};
console.log(x(4, 3));
console.log(math.Addition(23));


// anonymous self-invoking function
(function(){
    var y = "Hello";
    console.log(y);
})();


function myFunction(a,b,c=65) {
    return a+b+c;
}

console.log(myFunction(4, 3));


// Arrow Function
let sum = (a, b) => a + b;
// OR
sum = (a, b) => { 
    let result = a + b;
    return result; 
};

console.log(sum(1, 2) ); // 3