function getIndexToIns(arr, num) {

  function compareSort(first, second){
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1; 
  }

  let sortedArr = arr.sort(compareSort);
  let arrIndex = 0;

  for(let i = sortedArr.length - 1; i >= 0; i--){
    
    if(num > sortedArr[i]){
      arrIndex = i + 1;
      break
    }
  }

  return arrIndex;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
