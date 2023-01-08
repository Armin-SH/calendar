export interface DayProps {

  isSelecting?: boolean;

  daysEvent?: () => void;

  selectedDay?: boolean;

  children: any

  disabledDay?: boolean

  holidays?: boolean

  passedDay?: boolean
}