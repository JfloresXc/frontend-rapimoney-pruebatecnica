export function formatYYYYMMD(textDate = '') {
  const date = new Date(textDate);
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  return `${year}-${month}-${day}`;
}

export function formatToShortDate(textDate = '') {
  return textDate.slice(0, 10);
}
