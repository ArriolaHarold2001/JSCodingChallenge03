"use strict";
/**
 * EASY: Write a function that would allow you to do this:
 * var run = exercise('running');
 * console.log(run()); // prints "Today's exercise: running"
 * var swim = exercise('swimming');
 * console.log(swim()); // prints "Today's exercise: swimming"
 */

const exercise = (string) => () => `Todays exercise: ${string}`;

const run = exercise("running");
const swim = exercise("swimming");
// console.log(run());
// console.log(swim());

/**
 * MEDIUM: Write a function that would allow you to do this:
 * var sharePizza = cutPizzaSlices(8);
 * console.log(sharePizza(2));
 * prints "Each person gets 4.00 slices of pizza"
 * console.log(sharePizza(3));
 * prints "Each person gets 2.67 slices of pizza"
 */

const cutPizzaSlices = (int1) => (int2) => int1 / int2;
const sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// console.log(sharePizza(3));

/**  HARD: Data security exercise. Inside of a closure, create an object called pii
 * (Personally Identifiable Information)that cannot be accessed directly.
 * The object should have at least two properties: name and ssn.
 * Only the name property should be accessible, and it should be called through a public function.
 * The ssn property should not be accessible at all.
 * Creating private objects and private properties helps you control who has access
 * to what data and helps you prevent people who shouldn't see important info like
 * social security numbers from getting access to the data.
 * You can use 'getName' or other get methods to access data that people might need.
 * For example, people addressing a package or email may need a customer's name,
 * but they definitely shouldn't have access to their ssn.
 */

// using arrow function
const pii = () => {
  const names = "Harold";
  const ssn = "123-45-6789";

  const getName = () => names;

  const getSSN = () => ssn;

  return {
    getName,
    getSSN,
  };
};

const test = pii();

// console.log(test.names);
// console.log(test.ssn);
// console.log(test.getName());
// console.log(test.getSSN());

// using Hoisted function
function piis() {
  const names = "Harold";
  const ssn = "123-45-6789";

  this.getName = () => names;
  this.getSSN = () => ssn;
}

const piiTest = new piis();
// console.log(piiTest.names);
// console.log(piiTest.ssn);
// console.log(piiTest.getName());
// console.log(piiTest.getSSN());

// using classes and the private variable initializer
class Pii {
  #names = "Harold";
  #ssn = "123-45-6789";

  getName() {
    return this.#names;
  }
  getSSN() {
    return this.#ssn;
  }
}

const pit = new Pii();
// console.log(pit.names);
// console.log(pit.ssn);
// console.log(pit.getName());
// console.log(pit.getSSN());

const piiModule = (function () {
  const ssn = () => "123-45-678";

  const pii = {
    names: "Harold",
    ssnAccess: function (key) {
      if (key === "turtles") {
        ssn();
        return {
          pii: pii,
        };
      }
      console.log("ACCESS DENIED");
    },
  };
  return {
    pii: pii,
  };
})();

// piiModule.pii.ssnAccess("turtles");
// piiModule.pii.ssnAccess("cats");
// console.log(piiModule.pii.names);

/**
 * VERY HARD: Object prototype chain and prototypal inheritance exercise.
 * 1. Create a Person constructor that has three properties: name, job, and age.
 * 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
 * 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
 * See next page…
 * 4. Create a Programmer constructor that inherits all the members from Person with an additional
 * 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
 * 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer
 * to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property
 * on that programmer to be true.
 * 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is
 * busy and another if the programmer is not, e.g. should initially log out "Mark can't accept
 * any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
 * 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the
 * programmer and list off all languages the programmer knows.
 * 8. Test it out - can you create different programmers and run all the methods on them? Does each
 * programmer maintain their own properties properly and independently of the other programmers?
 * Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties
 * to  incorporate the syntax.
 * function Person(name, job, age) { }
 * function Programmer(name, job, age, languages) { }
 */

// More common usage
// class Person {
//   constructor(name, job, age) {
//     this.name = name;
//     this.job = job;
//     this.age = age;
//   }
//   exercise() {
//     console.log("running is fun!");
//   }
//   fetchJob() {
//     console.log(`${this.name} is a ${this.job}`);
//   }
// }

// class Programmer extends Person {
//   constructor(name, job, age, language) {
//     super(name, job, age);
//     this.name = name;
//     this.job = job;
//     this.age = age;
//     this.language = language;
//     this.busy = true;
//   }

//   completeTask() {
//     this.busy = false;
//   }

//   acceptNewTask() {
//     this.busy = true;
//   }

//   offerNewTask() {
//     if (this.busy === false)
//       console.log(`${this.name} is ready to accept a new task`);
//     console.log(`${this.name} cannot accept any new tasks at the moment`);
//   }

//   learnLanguage(lan) {
//     this.language.push(lan);
//   }

//   listLanguage() {
//     return this.language;
//   }
// }

// const person01 = new Person("Harold", "Backend Engineer", 20);
// const programmer01 = new Programmer("Harold", "DevOps", 35, [
//   "HTML",
//   "C#",
//   "LUA",
// ]);
// const programmer02 = new Programmer("Edwin", "janitor", 89, [
//   "HTML",
//   "SASS,Ruby",
// ]);
// const programmer03 = new Programmer("Emmanuel", "SysOps", 31, [
//   ("HTML", "CSS", "JS", "FUN"),
// ]);

// programmer01.learnLanguage("CSS");
// programmer02.learnLanguage("C++");
// programmer03.learnLanguage("JAVA");
// console.log(programmer01.listLanguage());
// console.log(programmer02.listLanguage());
// console.log(programmer03.listLanguage());

// console.log(person01);
// console.log(programmer01);
// console.log(programmer02);
// console.log(programmer03);
// person01.exercise();
// person01.fetchJob();

// I think how it was intended to be solved
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype.exercise = function () {
  console.log("running is fun!");
};

Person.prototype.fetchJob = function () {
  console.log(`${this.name} is a ${this.job}`);
};

function Programmer(name, age, job, language) {
  // super(name, age, job);
  this.name = name;
  this.age = age;
  this.job = job;
  this.language = language;
}

Programmer.prototype.completeTask = function () {
  this.busy = false;
};

Programmer.prototype.acceptNewTask = function () {
  this.busy = true;
};

Programmer.prototype.offerNewTask = function () {
  if (this.busy === false)
    console.log(`${this.name} is ready to accept a new task`);
  console.log(`${this.name} cannot accept any new tasks at the moment`);
};

Programmer.prototype.learnLanguage = function (lan) {
  this.language.push(lan);
};

Programmer.prototype.listLanguage = function () {
  return this.language;
};

Object.setPrototypeOf(Programmer.prototype, Person.prototype);

const person01 = new Person("Harold", "Backend Engineer", 20);
const programmer01 = new Programmer("Harold", "DevOps", 35, [
  "HTML",
  "C#",
  "LUA",
]);
const programmer02 = new Programmer("Edwin", "janitor", 89, [
  "HTML",
  "SASS,Ruby",
]);
const programmer03 = new Programmer("Emmanuel", "SysOps", 31, [
  ("HTML", "CSS", "JS", "FUN"),
]);

programmer01.learnLanguage("CSS");
programmer02.learnLanguage("C++");
programmer03.learnLanguage("JAVA");
console.log(programmer01.listLanguage());
console.log(programmer02.listLanguage());
console.log(programmer03.listLanguage());

console.log(person01);
console.log(programmer01);
console.log(programmer02);
console.log(programmer03);
person01.exercise();
person01.fetchJob();
