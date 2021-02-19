// All JavaScript values, except primitives, are objects.
// JavaScript Primitives ==> string ,number, boolean, null, undefined


// Creating a JavaScript Object using Literal
let youtubeVideo = { 
    title:'Loops in JavaScript',
    length:'12',
    description:'JavaScript Tutorials',
}
console.log(youtubeVideo);
console.log(`Hey Title is ${youtubeVideo.title} of Length ${youtubeVideo.length}`);


// Creating a JavaScript Object using Keyword new
let person = new Object();
person.firstName = "Balchandra";
person.lastName = "Samleti";
person.age = 21;
person.eyeColor = "black";
console.log(person.age);

var x = person;
x.age = 10;    
console.log(person.age);




// Genereate Random Object From https://randomapi.com/
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);