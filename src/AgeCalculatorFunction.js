export default function calcAge(m, d, y) {
  let birthDate = [m, d, y].join("/");
  birthDate = new Date(birthDate);
  let otherDate = new Date(); // current date

  let years = otherDate.getFullYear() - birthDate.getFullYear();
  let months = otherDate.getMonth() - birthDate.getMonth();
  let days = otherDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(
      otherDate.getFullYear(),
      otherDate.getMonth(),
      0
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return [days, months, years];
}
