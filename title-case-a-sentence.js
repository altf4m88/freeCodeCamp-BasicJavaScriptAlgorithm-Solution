function titleCase(str) {
  let lowerStr = str.toLowerCase();
  let strArr = lowerStr.split(" ");
  let temp = [];
  let temp2 = [];
  let resultStr = "";

  for(let i = 0; i < strArr.length; i++){
    temp = strArr[i].split("");
    for(let j = 0; j <= strArr[i].length; j++){
      if(j == 0){
        temp2.push(temp[j].toUpperCase());
      } else if(j == strArr[i].length){
        temp2.push(" ")
      }
      else {
        temp2.push(temp[j].toLowerCase());
      }
    }
  }
  for(let k = 0; k < temp2.length - 1; k++){
   resultStr += temp2[k];
  }
  return resultStr;
}

titleCase("I'm a little tea pot");
