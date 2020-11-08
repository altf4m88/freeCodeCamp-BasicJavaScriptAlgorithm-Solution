function mutation(arr) {
  let firstWord = arr[0].toLowerCase()
  let secondWord = arr[1].toLowerCase()
  let firstArray = firstWord.split("");
  let secondArray = secondWord.split("");
  let indexCheck;

  for(let x = secondArray.length - 1; x >= 0; x--){
    indexCheck = firstArray.indexOf(secondArray[x]);
    console.log(indexCheck)
    if(indexCheck == -1){
      return false;
    } else {
      continue;
    }
  }
  return true;
}

mutation(["hello", "Hello"]);
