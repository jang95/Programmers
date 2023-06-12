// 나의 풀이
const solution = (n, k) => n * 12000 + (k - Math.floor(n / 10)) * 2000;

// 다른 사람 풀이

// ~~ 문법: Math.floor와 동등하게 쓰이는 연산자
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}

/**
 * ~ (Tilt) 문법
 * 연산자를 사용하게 되면 내부적으로 32비트 정수로 변환 수 NOT 연산자를 실행
 * 0과 1을 모두 뒤집는 Bitwise NOT 연산자
 * ~N == -(N+1)
 * ex) 정수 9의 2진수는 000...1001 -> 111...0110 이렇게 변하며 -10이 된다
 */

var str = '강남역, 잠실역, 신논현역';
var val = '금호역';

if (~str.indexOf(val)) {
  // 본디 문자열이 없으면 -1이 반환되지만 ~가 있으므로 true가 되며 실행
  console.log(!~str.indexOf(val)); // true에 !이 붙으므로 false 출력
} else {
  console.log(222);
}
