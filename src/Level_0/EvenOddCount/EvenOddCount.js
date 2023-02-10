// 나의 풀이
const solution = (num_list) => {
  let even = 0;
  let odd = 0;
  const counter = num_list.forEach((x) => {
    if (x % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  });
  return [even, odd];
};

// 나의 풀이 리팩토링
// counter 변수를 만들 필요가 없었음
const fix = (num_list) => {
  let even = 0;
  let odd = 0;
  num_list.forEach((x) => {
    if (x % 2 == 0) {
      even += 1;
    } else {
      odd += 1;
    }
  });
  return [even, odd];
};
