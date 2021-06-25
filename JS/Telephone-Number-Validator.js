function telephoneCheck(str) {
  let myReg = /^1?\s?\d{3}[\s-]?\d{3}[\s-]?\d{4}$|^1?\s?\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/;
  return myReg.test(str);
