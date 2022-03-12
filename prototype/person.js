function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

person1 = new Person('singco', 27, ["read a book"]);
console.log(person1.name);

Person.prototype.come = function() {
  console.log("Come Here", this.name);
};
person1.come();

console.log(Object.getPrototypeOf(Person));