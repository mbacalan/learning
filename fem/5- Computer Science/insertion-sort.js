function insertionSort(input) {
  for (let i = 1; i < input.length; i++) {
    let numberToInsert = input[i];
    let j;

    for (j = i - 1; input[j] > numberToInsert && j >= 0; j--) {
      input[j + 1] = input[j];
    }

    input[j + 1] = numberToInsert;
  }

  return input;
}

insertionSort([5,4,3,2,1]);
