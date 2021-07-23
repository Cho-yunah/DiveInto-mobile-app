const getDuration = (durationHour: number, durationMin: number) => {
  let result = '';
  let h = durationHour;
  let m = durationMin;

  if (durationMin === 0) result = `${durationHour}시간`;
  else if (durationMin < 0) {
    h = h - 1;
    m = 60 + m;
    result = `${h}시간 ${m}분`;
  } else {
    result = `${durationHour}시간 ${durationMin}분`;
  }

  return result;
};
export default getDuration;
