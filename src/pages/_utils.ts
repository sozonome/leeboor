import { differenceInDays, format } from "date-fns";
import id from "date-fns/locale/id";

export const inferHoliday = (holidayDate: Date | string) => {
  const remainingDays = differenceInDays(new Date(holidayDate), new Date());
  const formattedDate = format(new Date(holidayDate), "eeee, dd MMMM yyyy", {
    locale: id,
  });

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
