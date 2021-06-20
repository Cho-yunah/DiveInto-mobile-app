export default function addCashComma(target: number): string {
  const reversedTarget = target.toString().split('').reverse();
  let flag = 0;
  let result = [];

  for (let i = 0; i < reversedTarget.length; i++) {
    result.push(reversedTarget[i]);
    flag++;

    if (flag > 2 && i !== reversedTarget.length - 1) {
      result.push(',');
      flag = 0;
    }
  }

  return result.reverse().join('');
}
