export const addDays = (date: any, number: number) => {
  const newDate = new Date(date);
  return new Date(newDate.setDate(newDate.getDate() + number));
}

export const convertDate = (date: string | number | Date, format = "YYYY-MM-DD") => {
  if (date) {
    let moment = require('jalali-moment');

    return moment(date).locale('fa').format(format);
  }

  return null;
};


export const timeDifference = (date: Date) => {
  if (date) {
    let moment = require('jalali-moment');

    return Math.abs(moment().diff(date, 'seconds'));
  }

  return 0;
};


export const timeIsAfter = (date: string | Date, timeDestination: string | Date = new Date()) => {
  if (date) {
    let moment = require('moment');

    return moment(date).isAfter(timeDestination);
  }

  return false;
};

export const momentFormat = (format: string) => {
  let moment = require('moment');
  return (moment(new Date().getTime()).format(format))
}

export const timePassed = (date: Date) => {
  if (date) {
    let moment = require('jalali-moment');
    return moment(date).locale("fa").fromNow();
  }

  return null;
}