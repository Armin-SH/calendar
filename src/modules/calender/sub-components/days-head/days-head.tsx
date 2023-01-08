import * as React from "react";
import {DaysHeadProps} from "./days-head.props";
import moment from "jalali-moment";
import {fa} from "../../config";
import {Button, Div, Text} from '@pezeshk-book/ui-kit'
import {ArrowLeftIcon, ArrowRightIcon, CalendarIcon} from '../../icons'

const DaysHead = (props: DaysHeadProps) => {
  const {decreaseMonth, increaseMonth, monthName, endDate, startDate, year} = props;

  const backDisable = `${moment(startDate).locale("fa").format("jMMMM")} ${fa(moment(startDate).format("jYYYY"))}` === monthName

  const forward = `${moment(endDate).locale("fa").format("jMMMM")} ${fa(moment(endDate).format("jYYYY"))}` === monthName

  return (
    <Div className={'flex-wrap justify-center items-center bg-white w-[320px] self-center mb-5'}>
      <Div className={'w-full items-center justify-between h-12 border border-grey-500 rounded px-4'}>
        <Div>
          <Text color={'grey.900'} typography={'xs'} type={"medium"}>
            سال {year}
          </Text>
        </Div>
        <Div className={'items-center mr-8'}>
          <Button variant={"text"} size={'small'} className={'flex items-center'} onClick={increaseMonth} shape={'circle'} disabled={forward}>
            <Div className={'h-3 w-[6px] relative'}>
              <img src={ArrowLeftIcon} className={'w-full h-full object-contain'} alt={'ماه بعد'}/>
            </Div>
          </Button>
          <Text className={'mx-1'} color={"grey.500"} typography={"xs"}>{monthName}</Text>
          <Button variant={"text"} size={'small'} className={'flex items-center'} onClick={decreaseMonth} shape={'circle'} disabled={backDisable}>
            <Div className={'h-3 w-[6px] relative'}>
              <img src={ArrowRightIcon} className={'w-full h-full object-contain'} alt={'ماه قبل'}/>
            </Div>
          </Button>
        </Div>
        <Div className={'relative w-[19px] h-[22px]'}>
          <img src={CalendarIcon} alt={'تقویم'}/>
        </Div>
      </Div>
    </Div>
  );
};

export default DaysHead
