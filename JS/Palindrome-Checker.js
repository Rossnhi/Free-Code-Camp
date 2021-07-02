function palindrome(str) {
  let i = 0;
  let j = str.length - 1;
  let myReg = /[a-z0-9]/i;
  while(i < j) {
    if (myReg.test(str[i]) && myReg.test(str[j])) {
      if(str[i].toUpperCase() != str[j].toUpperCase()) {
        return false;
      }
      i++;
      j--;
    }
    if (!myReg.test(str[i])) {
      i++;
    }
    if (!myReg.test(str[j])) {
      j--;
    }
  }
  return true;
}
