function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let currentLongest = 0;

  const checkLength = (item, index) => {
    if(item.length > currentLongest){
      currentLongest = item.length;
    }
  }
  strArr.forEach(checkLength);
  let longest = currentLongest;

  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
