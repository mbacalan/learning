function bubbleSort(input) {
  let swapped = false;
  let iterations = 0; // optimization

  do {
    swapped = false;
    iterations++

    for (let i = 0; i < input.length - iterations; i++) {
      console.log(input)

      if (input[i] > input[i + 1]) {
        const temp = input[i];

        input[i] = input[i + 1];
        input[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped)

  console.log(input)
  return input;
}

bubbleSort([5,4,3,2,1])
