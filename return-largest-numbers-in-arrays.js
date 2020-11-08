function largestOfFour(arr) {

  let currentLongest = 1;
  let currentminLongest = 1;
  let minItem;
  let resultArray = [];
  

  const checkLargest = (item, index) => {
    for(let i = 0; i < item.length; i++){
      if(item[i] < 0){
        minItem = item[i]
        if(currentminLongest == 1){
          currentminLongest = minItem
        }else if(currentminLongest < minItem){
          currentminLongest = minItem;
        };
        currentLongest = currentminLongest;
      } else if (currentLongest < item[i]){
      currentLongest = item[i];
      }
    }
    resultArray.push(currentLongest);
    currentLongest = 1;
  }
  arr.forEach(checkLargest);
  return resultArray;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
