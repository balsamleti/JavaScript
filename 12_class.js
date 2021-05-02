function Employee(){
    this.firstName;
    this.lastName;
}

var Employee1 = new Employee();
Employee1.firstName = "John";
Employee1.lastName = "Smith"

console.log(Employee1.firstName + " " + Employee1.lastName)



// ProtoType in JavaScript

function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log(this.name);
};
  
  // Usage:
let user = new User("John");
user.sayHi();


