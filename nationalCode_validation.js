// national code validation
export function national_code_validation(code) {
  if (code == "1111111111" || code == "2222222222" || code == "3333333333" || code == "4444444444" || code == "5555555555" || code == "6666666666" || code == "7777777777" || code == "8888888888" || code == "9999999999") { return false }
  var L = code.length;
  if (L < 8 || parseInt(code, 10) == 0) { return false }
  code = ('0000' + code).substr(L + 4 - 10);
  if (parseInt(code.substr(3, 6), 10) == 0) { return false }
  var c = parseInt(code.substr(9, 1), 10);
  var s = 0;
  for (var i = 0; i < 9; i++)
      s += parseInt(code.substr(i, 1), 10) * (10 - i);
  s = s % 11;
  return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
}
// end national code validation
