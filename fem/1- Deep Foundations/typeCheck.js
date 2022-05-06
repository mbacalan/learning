if (!Object.is) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    }
    else if (isItNan(x) && isItNan(y)) {
      return true;
    }
    else {
      return x === y;
    }


    function isItNegZero(v) {
      return v == 0 && (1 / v) == -Infinity;
    }

    function isItNan(v) {
      return v !== v;
    }
  }
}
