function convertToRoman(num) {
  let roma = "";
  let romanNum = [1000,500,100,50,10,5,1];
  for ( let i = 0; i < romanNum.length; i++){
    if (num/romanNum[i] >= 1 && num/romanNum[i] < 4){
      if (i%2 == 1 && (num % romanNum[i])/romanNum[i+1] >= 4){
        roma += roman[romanNum[i+1]] + roman[romanNum[i-1]];
        num = num % (9 * romanNum[i+1]);
        continue;
      }
      for( let j = 0; j < parseInt(num/romanNum[i]); j++){
        roma += roman[romanNum[i]];
      }
      num = num % romanNum[i];
    }
    if (num/romanNum[i] >= 4) {
      roma += roman[romanNum[i]] + roman[romanNum[i-1]];
      num = num % romanNum[i];
    }
  }
 return roma;
}

let roman = {
  1 : "I",
  5 : "V",
  10 : "X",
  50 : "L",
  100 : "C",
  500 : "D",
  1000 : "M"
}
