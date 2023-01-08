import moment from "jalali-moment";

export const fa = (n: any) => {
  if (process.env.NODE_ENV === "test") {
    return n;
  }
  return Number(n).toLocaleString("fa", {
    useGrouping: false,
  });
};
export const weekDayNames = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
export const formatJalaliDate = (date: any) => {
  const formattedDate = moment(`${date}`, "jYYYY/jMM/jDD");
  if (formattedDate.isValid()) {
    return formattedDate;
  }
  return null;
};
