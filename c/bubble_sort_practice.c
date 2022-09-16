#include <stdio.h>
#include <stdbool.h>

struct sized_array {
  int size;
  int items[10];
};

void print_array(int *array, int size) {
  for (int i = 0; i < size; i++) {
    printf("%d\n", array[i]);
  }
}

int bubble_sort(struct sized_array *input) {
  bool swapped = false;
  int iterations = 0;

  do {
    swapped = false;
    iterations++;

    for (int i = 0; i < input->size - iterations; i++) {
      if (input->items[i] > input->items[i + 1]) {
        int temp = input->items[i];
        input->items[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  print_array(input->items, input->size);

  return *input->items;
}

int main() {
  struct sized_array input = {
    .size = 10,
    .items = {3, 1, 4, 2, 5, 8, 10, 6, 9, 7}
  };

  bubble_sort(&input);
}
