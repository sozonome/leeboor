import { formatDate } from '@/utils/formatDate';
import { differenceInDays, startOfDay } from 'date-fns';

export const inferHoliday = (holidayDate: Date | string) => {
  const remainingDays = differenceInDays(
    startOfDay(new Date(holidayDate)),
    startOfDay(new Date())
  );
  const formattedDate = formatDate(holidayDate);

  const getCommentary = () => {
    if (remainingDays > 3) {
      return `Masih ${remainingDays} hari lagi nih...`;
    }

    if (remainingDays > 1) {
      return `Wah, ${remainingDays} hari lagi!`;
    }

    if (remainingDays === 1) {
      return 'Besok!';
    }

    return '';
  };

  return { remainingDays, formattedDate, commentary: getCommentary() };
};
