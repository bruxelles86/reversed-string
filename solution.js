function solution(str) {
  str = str.split("")
  var x = str.length - 1
  for (var i = 0, len = Math.round(str.length/2); i < len; i++) {
    var temp = str[i]
    str[i] = str[x]
    str[x] = temp
    x--
  }
  return str.join("")
}