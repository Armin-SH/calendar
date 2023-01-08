import React, {useEffect, useState} from "react";
import moment from "jalali-moment";
import Days from "./sub-components/days/days";
import {daysInMonth, IDays} from './config'
import {CalenderProps} from "./calender.props";
import {convertDate} from '../../utils/time-helper'
import {Div} from '@pezeshk-book/ui-kit'

interface IState {
  value: any
  initialValue?: any
  cloneDays: any
  monthName: string
  year: string
  days: IDays[]
}

const Calender = (props: CalenderProps) => {

  const {selectedDate, selectedDayCallback} = props;

  const [state, setState] = useState<IState>({
    value: convertDate(selectedDate, 'YYYY/MM/DD'),
    cloneDays: moment(selectedDate),
    monthName: "",
    year: "",
    days: [],
  });

  useEffect(() => {
    const {monthName, days, year} = daysInMonth(state.cloneDays);
    setState({
      ...state,
      days: days,
      monthName: monthName,
      initialValue: null,
      year: year,
    })
  }, []);

  useEffect(() => {
    if (state.cloneDays.isSame(state.cloneDays)) {
      const {monthName, days, year} = daysInMonth(state.cloneDays);
      setState({
        ...state,
        days: [...state.days.slice(state.days.length), ...days],
        monthName: monthName,
        year: year,
      })
    }
  }, [state.cloneDays]);

  const changeMonth = (amount: any) => {
    setState({
      ...state,
      cloneDays: state.cloneDays.clone().add(amount, "month"),
    });
  };

  const selectDay = (e: React.SyntheticEvent<EventTarget>) => {
    const faDate = (e.target as HTMLHtmlElement).dataset.fadate;
    if (faDate) {
      selectedDayCallback(faDate)
    }
    setState({
      ...state,
      value: faDate,
    });
  };

  const daysEventListeners = () => {
    return {
      onClick: selectDay,
    };
  };

  return (
    <Div dir={'rtl'} className={"items-center justify-center"}>
      <Days
        days={state.days}
        monthName={state.monthName}
        year={state.year}
        selectedDay={state.value}
        daysEventListeners={daysEventListeners}
        increaseMonth={() => changeMonth(1)}
        decreaseMonth={() => changeMonth(-1)}
        isDatePicker
      />
    </Div>
  );

}

export default Calender
