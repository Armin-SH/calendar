export const DAY_CONTAINER = 'mb-1 mx-0.5 text-center cursor-pointer relative min-w-[42px] min-h-[32px] rounded'


export const NORMAL_DAY = (selectedDay?: boolean) => {
  if (selectedDay) {
    return 'border-primary text-white bg-primary'
  }

  return 'border-secondary text-tertiary bg-secondary'
}