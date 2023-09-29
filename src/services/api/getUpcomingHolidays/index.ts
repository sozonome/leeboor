import { compareAsc, isAfter } from 'date-fns';

import type { GetHolidayEntriesResponse } from '@/services/api/getHolidayList/types';

export const getUpcomingHolidays = async (
  holidays: GetHolidayEntriesResponse
) => {
  const upcomingHolidays = holidays
    .sort((a, b) =>
      compareAsc(new Date(a.holiday_date), new Date(b.holiday_date))
    )
    .filter(
      (item) =>
        isAfter(new Date(item.holiday_date), new Date()) &&
        item.is_national_holiday
    );

  return upcomingHolidays;
};
