export default array => {
  return quickSortRecursive(array, 0, array.length - 1);
};

const quickSortRecursive = (array, left, right) => {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSortRecursive(array, left, index - 1);
    }
    if (index < right) {
      quickSortRecursive(array, index, right);
    }
  }
  return array;
};

const partition = (array, left, right) => {
  let mid = Math.floor((left + right) / 2);
  let pivot = array[mid];
  let il = left;
  let ir = right;
  while (il <= ir) {
    //while the boundaries dont collide
    while (array[il] < pivot) {
      //while values on left are less than pivot, keep going
      il++;
    }
    while (array[ir] > pivot) {
      //while value on right are great than pivot, keep going
      ir--;
    }
    if (il <= ir) {
      //swap the values that are incorrectly placed
      [array[il], array[ir]] = [array[ir], array[il]];
      il++;
      ir--;
    }
  }
  return il; //return the correct position of the pivot in the array
};
