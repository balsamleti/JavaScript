var myVar = 200;

function Demo(){
    this.myVar = 100;
    this.display = function(){
        var myVar = 300;
        console.log("MyVar "+ myVar);//300
        console.log("this.MyVar "+ this.myVar);//100
    }  
}

var obj = new Demo();
obj.display();



// this Method call() & apply() 

function demo1(){
    console.log("Demo is this");
}


demo1();
demo1.call();  //With the call() method, you can write a method that can be used on different objects
demo1.apply();



// Call Method

var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}


var person1 = {
firstName:"Balchandra",
lastName: "Samleti"
}

var person2 = {
firstName:"Shreyash",
lastName: "Pawar"
}

console.log(person.fullName.call(person1));  // Will return "Balchandra Samleti"
console.log(person.fullName.call(person2));  //Shreyash Pawar


//   call() Method with Arguments


var Region = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}


var person1 = {
    firstName:"John",
    lastName: "Doe"
}

aa = Region.fullName.call(person1, "Solapur", "Maharahstra");
console.log(aa);



//   With the apply() method, we can write a method that can be used on different objects.

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.


var def = {
fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

var person1 = {
    firstName:"John",
    lastName: "Doe"
}

aa = def.fullName.apply(person1, ["Oslo", "Norway"]);
console.log(aa);



