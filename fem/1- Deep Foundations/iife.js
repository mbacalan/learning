var teacher = "MB";

function anotherTeacher() {
  var teacher = "BM";
  console.log(teacher); // BM
}

( anotherTeacher )();

console.log(teacher); // MB

// If you can put a variable in there, you can put the whole thing...

var teacher = "MB";

(
  function anotherTeacher() {
    var teacher = "BM";
    console.log(teacher); // BM
  }
)();

console.log(teacher); // MB

// No anon functions apply here too

var teacher = "MB";

(
  function(teacher) {
    console.log(teacher); // BM
  }
)("BM");

console.log(teacher); // MB

// How about blocks?

var teacher = "MB";

{
  let teacher = "BM";
  console.log(teacher); // BM
}

console.log(teacher); // MB
