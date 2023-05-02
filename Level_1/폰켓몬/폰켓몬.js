// 나의 풀이
function solution(nums) {
  const set = new Set(nums);
  const arr = [...set];
  return arr.length > nums.length / 2 ? nums.length / 2 : arr.length;
}

// 다른 사람 풀이

// set 객체를 사용하면서 바로 스프레드 연산자 사용가능
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
