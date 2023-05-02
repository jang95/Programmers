// 나의 풀이
function solution(s, n) {
  const checkBig = [...s].map((x, idx) => /[A-Z]/.test(x));
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let y = s.toLowerCase().charCodeAt(i);
    if (y === 32) {
      arr.push(String.fromCharCode(y));
    } else if (y + n > 122) {
      arr.push(String.fromCharCode(y + n - 122 + 96));
    } else {
      arr.push(String.fromCharCode(y + n));
    }
  }
  return arr
    .map((x, idx) => (checkBig[idx] === true ? x.toUpperCase() : x))
    .join('');
}

// 다른 사람 풀이

// 아스키 코드 사용 없이 푼 문제 중 제일 깔끔
function solution(s, n) {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == ' ') {
      answer += ' ';
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

// 제한사항에 맞춘 풀이
function solution(s, n) {
  var chars =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';
  return s
    .split('')
    .map((e) => chars[chars.indexOf(e) + n])
    .join('');
}

// 다시보기
