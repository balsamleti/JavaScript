// The Object.defineProperty() method can also be used 
// to define a new propertywithin getters and setters on an object.

// Object.defineProperty() defines a new property directly on an object,
//  or modifies an existing property on an object, and returns the object.


const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    //   writable: true
    writable:false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);





function Employee(){
    this.title = ""
    this.name = ""
}

var employee = new Employee();
Object.defineProperty(employee,'fullName',{
    get: function(){
        return this.title+' '+this.name;
    },
    set: function(fullName){
        this.title = fullName.split(' ')[0];
        this.name = fullName.split(' ')[1];
    }
});

employee.fullName = "Mr Balchandra";

console.log(employee.fullName);



// using __proto__
var obj = {};
var descriptor = Object.create(null); // no inherited properties
descriptor.value = 'static';

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, 'key', descriptor);

// being explicit
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// recycling same object
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: value
    }
  );

  // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value;

  return d;
}
// ... and ...
Object.defineProperty(obj, 'key', withValue('static'));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
