function confirmEnding(str, target) {
  let strArrCheck = str.split(" ");
  let targetArr = target.split("");
  let confirmed = false;

  if(strArrCheck.length == 1){
    let strSplit = strArrCheck[0].split("");
    strSplit.reverse();
    targetArr[0].split();
    targetArr.reverse();
    let reversedString = "";
    let reversedTargetString = "";
    for(let i = 0; i < targetArr.length; i++){
      reversedString += strSplit[i];
      reversedTargetString += targetArr[i];
    }
    if(reversedString == reversedTargetString){
      confirmed = true;
    }
  }
  else{
    let strSplit = strArrCheck[strArrCheck.length - 1].split("");
    strSplit.reverse();
    targetArr[0].split();
    targetArr.reverse();
    let reversedString = "";
    let reversedTargetString = "";
    for(let i = 0; i < targetArr.length; i++){
      reversedString += strSplit[i];
      reversedTargetString += targetArr[i];
    }
    if(reversedString == reversedTargetString){
      confirmed = true;
    }
  }

  return confirmed;
}

confirmEnding("Open sesame", "same");
