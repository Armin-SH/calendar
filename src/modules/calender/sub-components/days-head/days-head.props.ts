export interface DaysHeadProps {

  monthName: string;

  increaseMonth?: () => void;

  decreaseMonth?: () => void;

  startDate?: string

  endDate?: string

  year: string
}
