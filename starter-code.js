function mergeSort(arr) {
  // if the array is length one or zero, return the array
  if (arr.length === 0 || arr.length === 1){
    return arr;
  }
  // figure out the middle point
  var mid = parseInt(arr.length/2);
  // create an array of the left half
  var leftArr = arr.slice(0, mid);
  // create an array of right half
  var rightArr = arr.slice(mid, arr.length)
  // call merge on a recursively called left half and right half
  return (mergeSort(leftArr), mergeSort(rightArr));
}


function merge(leftArr, rightArr) {
  //variable to hold result
  var mergedResult;
  // while both arrays have elements in them, zip them together
  while (leftArr, rightArr){
    mergedResult = leftArr + rightArr
  }
    // if the left array first element is less than the right array first element, push to result
    if (leftArr[0] < rightArr[0]){
      mergedResult.push(leftArr[0]);
      // else push the right array first element to result
    } else {
      mergedResult.push(rightArr[0]);
    }

  // if left is the only array with elements, push them all in
  while (left.legnth){
    mergedResult.push(leftArr.shift());
  }
  // if right is the only array with elmeents, push them all in
  while (rightArr.length){
    mergedResult.push(rightArr.shift());
  }
  // return final result
  return mergedResult;
}
