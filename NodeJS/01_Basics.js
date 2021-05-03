const greet = (name) =>{
    console.log(`Hello, ${name}`);
}

greet('Balchandra');


// Global Object 

// console.log(global);

// global.setTimeout( () =>{
//     console.log("TIME OUT");
//     clearInterval(int);
// },3000);


// const int = setInterval( () =>{
//     console.log('In the interval')
// },1000);

console.log(__dirname);
console.log(__filename);



// Modules

const xyz = require('./Module1');
console.log(xyz);

const abc = require('./Module2');
console.log(abc.people);

const os = require('os');
// console.log(os)
// Buildin in Library

console.log(os.platform(), os.homedir());





