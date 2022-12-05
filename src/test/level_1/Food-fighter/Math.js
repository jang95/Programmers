/**
 * @author JJH
 * @description Math 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체 => 함수 객체가 아님
 *              Math는 number 자료형만 지원
 *              Math는 생성자 함수가 아님, 모든 속성과 메서드는 정적
 * @description ** Math 함수의 정확도는 구현에 따라 다름
 *                 서로 같은 JS  엔진에서도 다른 결과를 반환할 수 있음
 */

/**
 * Math.floor() : 주어진 숫자보다 작거나 같은 정수 중에서 가장 큰 수를 반환
 */

Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
