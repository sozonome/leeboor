import { differenceInDays } from "date-fns";

export const inferHoliday = (holidayDate: Date | string) => {
  const remainingDays = differenceInDays(new Date(holidayDate), new Date());

  return { remainingDays };
};
