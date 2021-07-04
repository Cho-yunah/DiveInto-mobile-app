const pushCorrectStar = (
  rate: number,
  fullStar: React.ReactNode,
  halfStar: React.ReactNode,
): React.ReactNode[] => {
  const diff = rate - Math.floor(rate);
  const stars = [];

  for (let i = 0; i <= rate - 1; i++) {
    stars.push(fullStar);
  }
  if (diff > 0 && diff < 1) stars.push(halfStar);

  return stars;
};

export default pushCorrectStar;
