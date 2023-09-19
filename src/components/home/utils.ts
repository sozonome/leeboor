import { formatDate } from "@/utils/formatDate";
import { differenceInDays } from "date-fns";

export const inferHoliday = (holidayDate: Date | string) => {
  const remainingDays = differenceInDays(new Date(holidayDate), new Date());
  const formattedDate = formatDate(holidayDate);

  const getCommentary = () => {
    if (remainingDays > 3) {
      return `Masih ${remainingDays} hari lagi nih...`;
    }

    if (remainingDays > 1) {
      return `Wah, ${remainingDays} hari lagi!`;
    }

    return "Besok!";
  };

  return { remainingDays, formattedDate, commentary: getCommentary() };
};
