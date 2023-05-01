// 나의 풀이
function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date('2016-' + a + '- ' + b).getDay();
  return week[date];
}

function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`).getDay();
  return week[date];
}

// 다른 사람 풀이

// Date 객체를 사용하지 않은 문제 풀이
function solution(a, b) {
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 1월 1일이 금요일 이므로 요일 배열의 시작은 목요일부터 진행
  const weekDay = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

  let days = b;
  // 앞의 달 만큼 일수 더하기
  for (let i = 0; i < a - 1; i++) days += monthDay[i];

  return weekDay[days % 7];
}
