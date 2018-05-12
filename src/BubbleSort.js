export default array => {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let swapped = false;
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return array;
};
