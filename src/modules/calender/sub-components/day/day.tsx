import React from "react";
import {DayProps} from "./day.props";
import {DAY_CONTAINER, NORMAL_DAY} from "./day.style";
import classNames from '../../../../utils/class-names'

export const Day = (props: DayProps) => {
  const {daysEvent, children, disabledDay, holidays, passedDay, selectedDay} = props;

  const normalDayStyle = {
    border: props.selectedDay ? "#27d4a8" : "#ececec",
    color: props.selectedDay ? "#ffffff" : "#343434",
    backgroundColor: props.selectedDay ? "#27d4a8" : "#ececec",
  }

  if (!children) {
    return <li className={classNames(
      DAY_CONTAINER,
      'text-d-xs font-sans text-transparent border-transparent'
    )} {...props} />
  }
  if (passedDay) {
    return <li className={classNames(
      DAY_CONTAINER,
      'font-sans text-secondary-dark bg-white border border-tertiary'
    )} {...props} />
  }
  if (disabledDay || holidays) {
    return <li className={classNames(
      DAY_CONTAINER,
      'bg-danger text-white border border-danger'
    )} {...props} />;
  }
  return <li className={classNames(
    DAY_CONTAINER,
    NORMAL_DAY(selectedDay)
    // @ts-ignore
  )} {...props} {...daysEvent ? daysEvent() : null} />
};
