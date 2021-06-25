function palindrome(str) {
  let i = 0;
  let j = str.length-1;
  while(i < j) {
    if (str[i].toLowerCase() == str[i].toUpperCase() && str[i]!= parseInt(str[i])){
      i++;
      continue;
    }
    if (str[j].toLowerCase() == str[j].toUpperCase() && str[j]!= parseInt(str[j])){
      j--;
      continue;
    }
    if (str[i].toUpperCase() != str[j].toUpperCase()){
      return false;
    }
    i++;
    j--;
  }
  return true;
}
