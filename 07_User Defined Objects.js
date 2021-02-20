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
delete myObj.rand;
console.log(myObj);
// ---------------------------------------------------------------------------------------------

function aa(val) { 
    var result = "";
    var objj = {
        "1": "Balchandra",
        "2": "Hii",
        "3": 34,
        "4": "34534",
        "5": "4485-1085-9419-1642",
        "6": "$7.59"
    };
    result = objj[val];
    return result;
}
console.log(aa("3"));

var myObj = {
    gift : "Pony",
    pet  : "Kitten",
    bed  : "sleight"
};

checkObj = (checkProp) =>{
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("gift"));
console.log(checkObj("hello"));




// Manipulating Complex Ojects

var myMusic = [
    { 
        "artist": "A R Rehman",
        "title" : "Jai Ho..!",
        "release_year": 2008,
        "formats": [
            "CD",
            "MP3",
            "MP4"
        ],
        "gold": true
    },

    { 
        "artist": "Arjit Singh",
        "title" : "Khairiyat",
        "release_year": 2019,
        "formats": [
            "YouTube",
            "MP4",
            "MP3"
        ],
        "gold": true
    }
];


// 

//you define your constructor function
function Employee(name, id) {
	this.name = name;
	this.id = id;
}

//extend the prototye
Employee.prototype.getName = function() {
	return this.name;
}
Employee.prototype.setID = function(ID) {
	this.id = ID;
}
 
//now start creating employee objects
var e1 = new Employee("John", 1234);
var e2 = new Employee("Lenon", 3481);
//and so on
 
//now access the properties from the prototype
e1.getName(); //"John"
e2.setID(8888);

