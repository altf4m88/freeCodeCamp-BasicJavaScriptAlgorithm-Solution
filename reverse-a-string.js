function reverseString(str) {
  let strArr = str.split("");
  let reversed = "";
  for(let i = (strArr.length - 1); i >= 0; i--){
    reversed += strArr[i];
    console.log(reversed)
  }
  return reversed
}

reverseString("hello");
