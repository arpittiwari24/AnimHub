export function formatDateMongoDB(createdAt) {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const date = new Date(createdAt);
  return date.toLocaleString("en-US", options);
}
