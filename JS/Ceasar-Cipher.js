function rot13(str) {
  let plainText = '';
  let char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for ( let ltr in str) {
    if(/[A-Z]/.test(str[ltr])) {
      plainText += char[mod((char.indexOf(str[ltr])-13),26)];
    } else {
      plainText += str[ltr];
    }
  }
  return plainText;
}
function mod(n, m) {
  return ((n % m) + m) % m;
