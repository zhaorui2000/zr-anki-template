export default function getRandomInt(min, max) {
  if (min > max) {
    return getRandomInt(max, min);
  }
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}
