var Teacher = function () {};
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};


// // TODO: create the class Teacher and a method teach
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};


 var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");      // output  = Adam is now teaching Inheritance
