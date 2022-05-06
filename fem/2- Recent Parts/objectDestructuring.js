// OBJECT DESTRUCTURING

// Example 1 - Standard
function data() {
  return { a: 1, b: 2, c: 3};
}

var tmp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

// Example 2 - Shown
function data() {
  return { a: 1, b: 2, c: 3, d: 4};
}

var {
  //position doesn't matter
  b: second,
  a: first = 42,
  ...third
} = data();
