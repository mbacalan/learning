// namespace pattern, NOT a module

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  }
};

workshop.ask("Is this a module?");

// classic / revealing module pattern

// iife / singleton
var workshop = (function Module(teacher) {
  var publicAPI = { ask, };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  };
})("Kyle");

workshop.ask("It's a module, right?");

// factory - new instance each time it's run
function WorkshopModule(teacher) {
  var publicAPI = { ask, };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  };
};

var workshop = WorkshopModule("Kyle");
workshop.ask("It's a module, right?");
