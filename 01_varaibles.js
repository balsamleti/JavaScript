var myName = 'myName';
myName = 'dsgd';

let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

let dog = { name : 'Spot', breed : 'Dalmatian' };




function logName() {
  console.log(myName);
}


console.log(myNameArray[2]);
console.log(dog.name);
console.log(typeof dog)
logName();



// Constants in JavaScript
const daysInWeek = 7;
const hoursInDay = 24;

// daysInWeek = 8; //It will Raise Error


// Converting to number data types
let myNumber = '74';
// myNumber + 3;
let aa = Number(myNumber) + 3;
console.log(aa);

af= String(aa);
console.log(typeof af);