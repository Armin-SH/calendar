import jalaiMoment, {Moment} from "jalali-moment";
import {fa} from "./week-day";
import moment from 'moment'

export interface IDays {
  day: string;
  utc: string;
  faDate: string;
  disabled: boolean;
}

export interface IDaysInMonth {
  days: IDays[];
  monthName: string;
  month: number;
  today?: string;
  year: string
}

const checkDateMonth = (date: any, current: any) => current.jMonth() < date.jMonth();
const checkCurrentMonth = (date: Moment) =>
  jalaiMoment().format("jYYYY/jMM") === date.format("jYYYY/jMM");

export const daysInMonth = (date: Moment): IDaysInMonth => {
  const days: IDays[] = [];
  const clonedDate = date.clone();
  const monthName = `${clonedDate.locale("fa").format("jMMMM")}`;
  const year = `${clonedDate.locale("fa").format("jYYYY")}`;

  const month = Number(
    date
      .clone()
      .locale("fa")
      .format("jM"),
  );

  const firstDayOfWeek = date.clone().startOf("jMonth");
  const lastDayOfWeek = date.clone().endOf("jMonth");
  const today = checkCurrentMonth(date) ? {today: date.format("jDD")} : null;

  firstDayOfWeek.subtract((firstDayOfWeek.day() + 1) % 7, "days");

  while (firstDayOfWeek.isBefore(lastDayOfWeek)) {
    days.push({
      day: firstDayOfWeek.format("jDD"),
      utc: moment(new Date(firstDayOfWeek.toString())).format("YYYY-MM-DD"),
      faDate: firstDayOfWeek.format("jYYYY/jMM/jDD"),
      disabled: checkDateMonth(date, firstDayOfWeek),
    });
    firstDayOfWeek.add(1, "days");
  }
  return {monthName, month, days, year, ...today};
};
