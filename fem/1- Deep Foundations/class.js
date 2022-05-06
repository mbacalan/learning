// via prototype - without new

function userCreator(name, score) {
  let newUser = Object.create(userFunctionStore); /* create a new object with the bond to shared functions with __proto__ */
  newUser.name = name;
  newUser.score = score;
  return newUser; /* return the object */
}

/*
  when JS can't find the referenced property on the object, it will come look here
  thanks to Object.create(userFunctionStore)
*/
let userFunctionStore = {
  increment: function() { this.score++ },
  login: function() { console.log("login") }
};

let user1 = userCreator("Will", 3);
let user2 = userCreator("Tom", 5);

user1.increment();

// via prototype - with new, see thisKeyword.js for more

function User(name, score) {
  this.name = name;
  this.score = score;
};

User.prototype.increment = function() {
  this.score++;
};

User.prototype.login = function() {
  console.log("login");
};

let user1 = new User("Eva", 9); // no need to create a new object, set a bond to shared functions with Object.create() and return that object

user1.increment();

// via class

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  };

  increment() {
    this.score++;
  };

  login() {
    console.log("login");
  }
}

let user1 = new User("Eva", 9);

user1.increment();
