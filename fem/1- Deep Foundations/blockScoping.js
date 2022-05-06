/*
  "let" will force a block scope in any curly bracket
*/

// In this example, var will not create a new scope
// It will attach to scope of something(str)
// So this code works just fine and is better semantically
function something(str) {
  try {
    var id = someFn(str);
  } catch (err) {
    var id = 1;
  }

  return id;
}

// If you wanna use let so bad, think of explicit blocks
// with curly brackets, it's very explicit that you need
// those variables only for that scope
function formatStr(str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix .toUpperCase() + rest;
  }

  if (/^FOO:/.test(str)) {
    return str;
  }

  return str.slice(4);
}
