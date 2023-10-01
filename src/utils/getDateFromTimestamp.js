export default function getDateFromTimestamp(stamp, type) {
  let time_stamp = new Date(parseInt(stamp));
  let shortDay = time_stamp.toLocaleString("en-us", { day: "numeric" });
  let shortMonth = time_stamp.toLocaleString("en-us", { month: "short" });
  let shortYear = time_stamp.toLocaleString("en-us", { year: "numeric" });
  if (type == "short") {
    let date = shortDay + " " + shortMonth + " " + shortYear;
    return date;
  }

  if (type == "long") {
    let hours = time_stamp.getHours();
    let minutes = time_stamp.getMinutes();
    let seconds = time_stamp.getSeconds();

    let dateWithTime =
      shortDay +
      " " +
      shortMonth +
      " " +
      shortYear +
      " " +
      formatTime(hours, minutes, seconds);
    return dateWithTime;
  }
  return "date--";
}

function formatTime(hours, minutes, seconds) {
  let formattedHours = hours.toString().padStart(2, "0");
  let formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
