function chunkArrayInGroups(arr, size) {
  let chunkArr = [];
  let tempArray;
  let x = 0;
  let y = size;

  for(let i = 0; i < arr.length; i++){
    tempArray = arr.slice(x, y);
    if(tempArray.length != 0){
      chunkArr.push(tempArray);
    }
    else{
      break;
    }
    console.log(chunkArr)
    x += size;
    y += size;
  }
  return chunkArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 2);
