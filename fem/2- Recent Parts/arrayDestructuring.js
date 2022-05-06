// DESTRUCTURING

// Example 1 Assigning Data - Standard
function data() {
  return [1,2,3,4,5];
}

var tmp = data();
var first = tmp[0];
//Use default value
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
//put everything else in an array called fourth
var fourth = tmp.slice(3);

// Example 1 - Shown
function data() {
  return [1,2,3,4,5];
}

var tmp = data();
/*
  Any valid left-hand assignment works, such as;
  var o = {};
  var [
    o.first
  ]
*/
var [
  first,
  //Use default value
  second = 10, //strict equality for undefined
  //skip values you don't want with only a comma
  third,
  //put everything else in an array called fourth
  ...fourth
] = tmp;

// Example 2 Swapping values - Standard
var x = 10;
var y = 20;
{
  let tmp = x;
  x = y;
  y = tmp;
}

// Example 2 - Shown
var x = 10;
var y = 20;
[y,x] = [x,y];

// Example 3 Parameter Arrays - Standard
function data(tmp) {
  var [
    first,
    second,
    third
  ] = tmp;
}

// Example 3 Parameter Arrays - Shown
function data([
  first,
  second,
  third
]) {
  //...
}

// Example 4 Nested Array Destructuring - Standard
function data() {
  return [1,[2,3],4];
}

var tmp = data();
var first = tmp[0];
var tmp2 = tmp[1];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2];

// Example 4 - Shown
function data() {
  return [1,[2,3],4];
}

var [
  first,
  [
    second,
    third
  ],
  fourth
] = tmp = data();
