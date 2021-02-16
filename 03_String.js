// Strings

// Escape Notation
// Code	Result	Description
// \'	'	    Single quote
// \"	"	    Double quote
// \\	\	    Backslash

var x = "We are the so-called \"Vikings\" from the north.";
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
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
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
console.log(paragraph.replaceAll('monkey', 'dogs'));

// slice()
const str1 = 'The quick brown fox jumps over the lazy dog.';

console.log(str1.slice(31)); // expected output: "the lazy dog."
console.log(str1.slice(4, 19)); // expected output: "quick brown fox"
console.log(str1.slice(-4)); // expected output: "dog."
console.log(str1.slice(-9, -5));// expected output: "lazy"
