export default function theSameNameOfNumber(
  list: { equipmentName: string; size: string; rentNumber: number }[],
) {
  const extractArr = [];
  const extractArrIndex: number[] = [];
  const sortIndexNum = Array.from({ length: list.length }, (_, i) => i);

  list.forEach((el, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (i === index) return;
      if (
        el.equipmentName === arr[i].equipmentName &&
        el.size === arr[i].size
      ) {
        extractArr.push({
          equipmentName: el.equipmentName,
          size: el.size,
          rentNumber: el.rentNumber + arr[i].rentNumber,
        });
        extractArrIndex.push(index, i);
      }
    }
  });

  const unextractIndex = sortIndexNum.filter(
    val => !extractArrIndex.includes(val),
  );

  for (let val of unextractIndex) {
    extractArr.push(list[val]);
  }

  return extractArr;
}
