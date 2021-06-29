/**
 * 최소값과 최대값을 파라미터로 받고 그 사이의 무작위(random)  정수 값을 반환하는 함수;
 * @param {Number}} min 
 * @param {Number} max 
 * @returns {Number} min과 max사이의 최솟값
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}