/**
 *
 * @param {Number} id element to find in arr
 * @param {[Number]} arr array of numbers to search
 */
function binarySearch(id, arr) {
  let min = 0;
  let max = arr.length;
  let index;
  let element;

  arr.sort();

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = arr[index];

    if (element < id) {
      min = index + 1;
    } else if (element > id) {
      max = index - 1;
    } else {
      return console.log(element);
    }
  }
}

binarySearch(23, [20, 18, 23, 22, 24, 9, 12, 123, 38, 123, 345, 230, 581, 793, 1]);
