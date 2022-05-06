#include <stdio.h>
#include "main.h"

int main() {
  struct S s = {1, 2.0, 'c'};

  print_str_with_indices("hello world");
  print_struct(s);
}

void print_str_with_indices(char* str) {
  // pointers are their own type so they can't be assigned to other types
  char* s = str;

  // \0 is the null character
  // strings are terminated by a null character so we can use that in loops
  for (int i = 0; s[i] != '\0'; i++) {
    printf("%d - %c\n", i, s[i]);
  }
}

void print_struct(struct S s) {
  printf("struct's int is: %d\n", s.i);
  printf("struct's float is: %f\n", s.f);
  printf("struct's char is: %c\n", s.c);
}
