// 나의 풀이
function solution(cipher, code) {
  let result = '';
  for (let i = code; i <= cipher.length; i += code) {
    result += cipher[i - 1];
  }
  return result;
}

// 다른 사람 풀이
function solution(cipher, code) {
  return cipher
    .split('')
    .filter((_, index) => (index + 1) % code === 0)
    .join('');
}
