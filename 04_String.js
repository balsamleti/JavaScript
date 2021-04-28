// Strings

// Escape Notation
// Code	Result	Description
// \'	'	    Single quote
// \"	"	    Double quote
// \\	\	    Backslash

let x = "We are the so-called \"Vikings\" from the north.";
console.log(x);


// Character access
console.log('cat'.charAt(1)); // returns "a"
console.log('cat'[1]);// returns "a"


// Methods
// CharAt Method
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

// Concat
const str1 = 'Hello';
const str2 = 'World';
console.log(str2.concat(', ', str1));

// endsWith
console.log(str1.endsWith('best'));
console.log(str2.endsWith('d'));

// includes
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// LastIndexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);

// localeCompare 
const a = 'réservé'; 
const b = 'RESERVE'; 
console.log(a.localeCompare(b)); // expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); // expected output: 0

// String Length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;
console.log(sln);

// match
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);

// matchAll()
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]);
console.log(array[1]);

// Replace & ReplaceAll
console.log(paragraph.replace('dog', 'monkey'));
// console.log(paragraph.replaceAll('monkey', 'dogs'));

// slice()
const str12 = 'pug, Labrador, Datschunde';
// let str = "Apple, Banana, Kiwi";
// console.log(str12.slice(31)); // expected output: "the lazy dog."
console.log(str12.slice(5, 8)); // expected output: "quick brown fox"
console.log(str12.slice(-11,-3)); // expected output: "dog."
// console.log(str12.slice(-9, -5));// expected output: "lazy"

// Converting to Upper and Lower Case
let text1 = "Hello World!";       // String
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

// String.trim()
let j = "       Balchandra Samleti!        ";
console.log(j.trim());
console.log(j.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// String Padding
let mm = "5";
console.log(mm.padStart(4,0));  //0005
console.log(mm.padEnd(4,0));    //5000


// Split on
txt = "a,b,c,d,e"; 
console.log(txt.split(","));          // Split on commas
console.log(txt.split(" "));          // Split on spaces
console.log(txt.split("|"));          // Split on pipe
