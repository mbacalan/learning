/*
Closure is when a function "remembers" its lexical scope
even when the function is executed outside that lexical scope
*/

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 1000);
}

ask("What is closure?"); // What is closure?
