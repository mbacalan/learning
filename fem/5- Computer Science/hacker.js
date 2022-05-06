function countingValleys(steps, path) {
  let arr = [...path];
  let level = 0;
  let levelarr = [];
  let valleys = 0;

  for (let i = 0; i < steps; i++) {
      if (arr[i] == 'D') {
          level--;
          levelarr.push(level);
      }

      if (arr[i] == 'U') {
          level++;
          levelarr.push(level);
      }
  }

  let inValley = false;

  for (let i = 0; i < levelarr.length; i++) {
    if (levelarr[i] < 0) {
      inValley = true;
    }

    if (levelarr[i] >= 0 && inValley) {
      inValley = false;
      valleys++;
    }
  }

  return valleys;
}

// countingValleys(8, 'UDDDUDUU')


function repeatedString(s, n) {
  if (s == 'a') {
    return n;
  }

  let count = 0;

  if (s.length < n) {
    s = s.repeat(n);
  }

  for (let i = 0; i < n; i++) {
    if (s[i] == 'a') {
      count++;
    }
  }

  return count;
}

repeatedString('a', 1000000000000);
