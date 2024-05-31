const myArr = [17, 3, 24, 5, 55, 9, 15];
function mergerSort(array) {
  if (array.length <= 1) return array;
  else {
    let end = array.length === 0 ? 0 : array.length - 1;
    let mid = Math.floor(end / 2);
    console.log(mid);
    const leftArray = array.slice(0, mid + 1);
    const rightArray = array.slice(mid + 1);
    //sorting the left
    const resFromLeft = mergerSort(leftArray);
    const resFromRight = mergerSort(rightArray);
    return merger(resFromLeft, resFromRight);
  }
}
function merger(leftArray, rightArray) {
  const res = [];
  let i = 0,
    j = 0;
  //console.log(leftArray + " " + rightArray);

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      res.push(leftArray[i]);
      i++;
    } else {
      res.push(rightArray[j]);
      j++;
    }
  }
  if (i >= leftArray.length) {
    res.push(...rightArray.slice(j));
  } else if (j >= rightArray.length) {
    res.push(...leftArray.slice(i));
  }
  return res;
}
console.log(mergerSort(myArr));
