export const average = (data) => {
  const sum = data.reduce((previous, current) => previous + current, 0);
  return (sum / data.length).toFixed(1);
};
