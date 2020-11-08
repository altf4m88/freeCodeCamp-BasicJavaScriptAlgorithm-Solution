function frankenSplice(arr1, arr2, n) {
  let result = [];
  let frontArr = arr2.slice(0, n);
  let backArr = arr2.slice(n, arr2.length);
  
  for(let i = 0; i < frontArr.length; i++){
    result.push(frontArr[i]);
  }
  result.push(...arr1);
  for(let i = 0; i < backArr.length; i++){
    result.push(backArr[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
