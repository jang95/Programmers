// 나의 풀이

function solution(nums) {
  const arr = [];
  // 하나의 배열에서 숫자 3개를 골라 더한 수를 나타내기 위한 3중 for 문
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  return arr
    .map((x) => {
      let count = 0;
      for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
          count += 1;
        }
      }

      if (count === 2) return 1;
      return 0;
    })
    .filter((x) => x != 0).length;
}

// 나의 풀이 리팩토링

// 걸리는 시간 단축
function solution(nums) {
  const arr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  return arr
    .map((x) => {
      let count = 0;
      for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
          count += 1;
          if (count > 2) return 0; // count가 2이상 넘어가면 바로 return 처리
        }
      }
      if (count === 2) return 1;
    })
    .filter((x) => x != 0).length;
}

// 다른 사람 풀이

/**
 * 소수인지 판별하는 함수 따로 작성하여 문제 풀이
 * @param {Number} num 주어진 배열에서 3개의 수를 합한 수
 * @returns {boolean}
 * @description 나의 풀이에서는 3개의 수를 합한 것들을 배열에 넣어 해결하는 과정에서
 *              map과 filter 등을 활용하여 작업 시간이 오래 걸림
 */
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  let num,
    size = nums.length;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let k = j + 1; k < size; k++) {
        num = nums[i] + nums[j] + nums[k];
        if (isPrime(num)) answer++;
      }
    }
  }
  return answer;
}
