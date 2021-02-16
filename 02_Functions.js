// Expressions - function expression
// The main difference between a function expression and a function declaration 
// is the function name, which can be omitted in function expressions to create anonymous functions.

const getRectArea = function(width, height) {
    return width * height;
};
  
// console.log(getRectArea(3, 4)); // expected output: 12
  

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