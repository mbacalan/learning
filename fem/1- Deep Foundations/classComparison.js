// --- Class ---

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }

  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(message) {
    this.ask(message.toUpperCase());
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Are classes getting better?"); // Kyle Are classes getting better?

// --- Prototypal Objects ---

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
}

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype); // "extends"
AnotherWorkshop.prototype.speakUp = function(message) {
  this.ask(message.toUpperCase());
}

var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUp("Isn't this ugly?"); // Kyle ISN'T THIS UGLY?


// --- Delegated Objects ---

var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },

  ask(queestion) {
    console.log(this.teacher, question);
  }
};

var AnotherWorkshop = Object.assign(
  Object.create(Workshop),
  {
    speakUp(message) {
      this.ask(message.toUpperCase());
    }
  }
);

var JSRecentParts = Object.create(AnotherWorkshop);
JSRecentParts.setTeacher("Kyle");
JSRecentParts.speakUp("But isn't this cleaner?"); // Kyle BUT ISN'T THIS CLEANER?
