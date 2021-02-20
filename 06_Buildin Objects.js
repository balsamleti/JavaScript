let arr = [5];
console.log(arr.length); //1 

arr = new Array(5); 
console.log(arr.length); //5

console.log(typeof arr); //"object"
// console.log(arr instanceOf Object); //true

// arr.length;
// arr.slice();
// arr.splice();
// arr.pop();
// arr.push();
// arr.filter();
// arr.indexOf();

// Object
//    ----- Array
//    ----- Function
//    ----- Boolean
//    ----- RegExp
//    ----- String
//    ----- Error

/* Strings */
var str = "hello";
str.split();
 
var str1 = new String("hello");
str1.split();
 
/* Boolean */
var b = true;
var b1 = new Boolean(true);
 
/* Numbers */
var n = 1.11;
n.toFixed();
 
var n1 = new Number(1.11);
n1.toFixed();