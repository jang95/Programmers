// 나의 풀이
// 풀고 난 뒤 생각해보니 이진수를 사용할 수 있는지에 대한 문제인거 같은데
// 단순 내장 함수로만 사용해서 풀었음
function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// 다른 사람 풀이
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  // 전개 연산자 사용하고, 원소 거꾸로 정렬 뒤 정수형으로 변경
  temp = [...temp.toString()].reverse().map((v) => +v);

  // 문제의 제한 사항을 확인하여 나머지 배열 원소 0으로 채움
  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  // ex [2,1,1,2,0,0,0,0,0,0,0]
  // 해당 idx의 원소에 따라 변경
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  return Number(temp.reverse().join('')).toString();
}
