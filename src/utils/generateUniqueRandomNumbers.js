export default function generateUniqueRandomNumbers(min, max) {
  if (min > max) {
    return generateUniqueRandomNumbers(max, min);
  }
  let array = [...new Array(max + 1).keys()].slice(min);
  // 从数组的最后一个元素开始遍历
  for (let i = array.length - 1; i > 0; i--) {
    // 生成一个从0到i的随机索引
    const j = Math.floor(Math.random() * (i + 1));
    // 交换元素
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
