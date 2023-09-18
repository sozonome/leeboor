import { differenceInDays, format } from "date-fns";
// date-fns #2629 & #2694
// https://github.com/date-fns/date-fns/issues/2964#issuecomment-1397856471
import id from "date-fns/locale/id/index";

export const inferHoliday = (holidayDate: Date | string) => {
  const remainingDays = differenceInDays(new Date(holidayDate), new Date());
  const formattedDate = formatDate(
    new Date(holidayDate),
    "eeee, dd MMMM yyyy",
    {
      locale: id,
    }
  );

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

export const formatDate = (date: Date | string) =>
  format(new Date(date), "eeee, dd MMMM yyyy", {
    locale: id,
  });
