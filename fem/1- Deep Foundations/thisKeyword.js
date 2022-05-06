/* implicit binding */
var workshop = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  }
}

workshop.ask("What is implicit binding?"); // Kyle What is implicit binding?

/* sharing via implicit binding */
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask
}

var workshop2 = {
  teacher: "Suzy",
  ask: ask
}

workshop1.ask("How do I share a method?"); // Kyle How do I share a method?
workshop2.ask("How do I share a method?"); // Suzy How do I share a method?

/* explicit binding */
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
}

var workshop2 = {
  teacher: "Suzy",
}

ask.call(workshop1, "Can I explicitly set context?"); // Kyle Can I explicitly set context?
ask.call(workshop2, "Can I explicitly set context?"); // Suzy Can I explicitly set context?

/* new keyword */
// calls the function with an empty object as its context
// 1. Create a brand new empty object
// 2. Link that object to another object for prototype
// 3. Call funcion with 'this' set to new object
// 4. If function does not return an object, assume return of 'this
// see class.js for more

/* lexical this */
var workshop = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  }
}

workshop.ask("What happened to 'this'?"); // undefined What happened to 'this'?

workshop.ask.call(workshop, "Still no 'this'?"); // undefined Still no 'this'?
