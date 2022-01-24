"use strict";
// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

let exercise = (exerciseName) => () => `Today's exercise: ${exerciseName}`;

const run = exercise("running");
const swim = exercise("swimming");

console.log(run());
console.log(swim());
// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
//   // prints "Each person gets 2.67 slices of pizza"

let cutPizzaSlices = (x) => (m) => x / m;

let sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));

// HARD: Data security exercise. Inside of a closure, create an object called pii
// (Personally Identifiable Information)that cannot be accessed directly.
// The object should have at least two properties: name and ssn.
// Only the name property should be accessible, and it should be called through a public function.
// The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access
// to what data and helps you prevent people who shouldn't see important info like
// social security numbers from getting access to the data.
// You can use 'getName' or other get methods to access data that people might need.
// For example, people addressing a package or email may need a customer's name,
// but they definitely shouldn't have access to their ssn.

//module
let objectStorage = (function () {
  //private function
  let ssn = function () {
    console.log("123-45-678");
  };

  //public object
  let pii = {
    firstName: "Harold",
    lastName: "Arriola",
    fullName: function () {
      console.log(this.firstName + " " + this.lastName);
    },
    //method that determines if key is given acces to call private function
    ssnAccess: function (key) {
      if (key === "Psychological") {
        ssn();
      } else {
        console.log("ACCESS DENIED");
      }
    },
  };
  return {
    pii: pii,
  };
})();

objectStorage.pii.ssnAccess("Psychological");
objectStorage.pii.ssnAccess("Random Key");
objectStorage.pii.fullName();
console.log(objectStorage.pii.firstName);
console.log(objectStorage.pii.lastName);

//MORE PRACTICE USING THE SAME CONCEPT AS ABOVE^

// let areas = (function () {
//   let topSecretInformationThatNoOneShouldHaveAccessTo = function () {
//     for (let i = 0; i < 100; i++) {
//       console.log("123-45-678");
//     }
//   };

//   let publicInformationForMyFBIAgent = {
//     numberOfCats: 197,
//     ssn: function (topSecretPasswordThatNpotEvenTheFBIAgentCanHAve) {
//       if (topSecretPasswordThatNpotEvenTheFBIAgentCanHAve === "happyTree123") {
//         topSecretInformationThatNoOneShouldHaveAccessTo();
//       } else {
//         console.log("HAHAa Loser");
//       }
//     },
//   };

//   return {
//     publicInformation: publicInformationForMyFBIAgent,
//   };
// })();

// console.log(areas.publicInformation.numberOfCats);
// areas.publicInformation.ssn("notHappyTree123");
// areas.publicInformation.ssn("happyTree123");

// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
// See next page…
// 4. Create a Programmer constructor that inherits all the members from Person with an additional
// 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer
// to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property
// on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is
// busy and another if the programmer is not, e.g. should initially log out "Mark can't accept
// any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the
// programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each
// programmer maintain their own properties properly and independently of the other programmers?
// Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties
// to  incorporate the syntax.
// function Person(name, job, age) { }
// function Programmer(name, job, age, languages) { }

class Person {
  constructor(fullName, job, age) {
    this.fName = fullName;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log(`What is your opinion on exercise?`);

    setTimeout(() => {
      console.log(
        `I work at ${this.job} so what do you think I think about exercise...`
      );
    }, 1000);
    setTimeout(() => {
      console.log(`Just Kidding im ${this.fName} lol`);
    }, 3000);
  }

  fetchJob() {
    console.log("Fetching job...");
    setTimeout(() => {
      console.log(`JOB: ${this.fName} is a ${this.job}`);
    }, 3500);
  }
}

class Programmer extends Person {
  constructor(fullName, job, age, languages = []) {
    super(fullName, job, age);
    this.languages = languages;
    this.busy = true;
  }
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }
  offerNewTask() {
    if (this.busy) {
      console.log(`No I already have too much work`);
    } else {
      console.log(`YES 🤑 Give me work! I NEED WORK!`);
    }
  }
  learnLanguage(language) {
    this.languages.push(language);
  }

  listLanguage() {
    console.log(this.languages);
  }
}

const person01 = new Person("Harold", "Road to Hire Apprentice", 20);
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
programmer01.listLanguage();
programmer02.listLanguage();
programmer03.listLanguage();

// console.log(person01);
// person01.exercise();
// person01.fetchJob();
