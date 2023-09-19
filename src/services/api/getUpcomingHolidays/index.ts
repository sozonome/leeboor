import { compareAsc, isAfter } from 'date-fns';

import { getHolidays } from '@/services/api/getHolidayList';

export const getUpcomingHolidays = async () => {
  const holidays = await getHolidays();

  const upcomingHolidays = holidays
    .sort((a, b) =>
      compareAsc(new Date(a.holiday_date), new Date(b.holiday_date))
    )
    .filter((item) => isAfter(new Date(item.holiday_date), new Date()));

  return upcomingHolidays;
};
