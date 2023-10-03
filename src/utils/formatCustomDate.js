export const formatCustomDate = (timestamp) => {
  const date = new Date(timestamp);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = date.getDate();
  const year = date.getFullYear();

  // Pad the day with a leading zero if it's a single digit
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${month}. ${formattedDay} ${year}`;
};
