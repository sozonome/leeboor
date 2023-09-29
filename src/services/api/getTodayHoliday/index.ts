import { isToday } from 'date-fns';

import type { GetHolidayEntriesResponse } from '@/services/api/getHolidayList/types';

export const getTodayHoliday = async (holidays: GetHolidayEntriesResponse) => {
  const todayHoliday = holidays.find(
    (item) => isToday(new Date(item.holiday_date)) && item.is_national_holiday
  );

  return todayHoliday;
};
