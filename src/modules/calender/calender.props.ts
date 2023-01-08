export interface CalenderProps {
  selectedDate: string | Date

  selectedDayCallback: (date: string) => void
}
