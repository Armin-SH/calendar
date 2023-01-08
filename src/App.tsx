import React from 'react';
import './App.css';
import Calender from './modules/calender'
import moment from "jalali-moment";
import {addDays, convertDate} from './utils/time-helper'

function App() {

  const handleSelectDay = (date: string) => {
    console.log(date)
  }
  return (
    <div className="w-full flex px-5 py-60 items-center justify-center">
      <Calender
        selectedDate={addDays(moment.from(convertDate(Date.now(), 'YYYY/MM/DD'), 'fa', 'YYYY/MM/DD').format('YYYY-MM-DD'), 1)}
        selectedDayCallback={handleSelectDay}
      />
    </div>
  );
}

export default App;
