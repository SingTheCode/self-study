function Person(isMarried, name, gender) {
  let married = isMarried; // private
  this.name = name; // public
  this.gender = gender; // public
  this.sayHello = function () {
    // public
    console.log("Hi! My name is " + this.name);
  };
  this.getMarried = () => {
    return married;
  };
}

var person = new Person(true, "Lee", "male");

console.log(typeof person); // object
console.log(person); // Person { name: 'Lee', gender: 'male', sayHello: [Function] }

console.log(person.gender); // 'male'
console.log(person.married); // undefined
console.log(person.getMarried()); // true

let persons = {
  ["foo" + 1]: "Singco",
};

console.log(persons.foo1);
