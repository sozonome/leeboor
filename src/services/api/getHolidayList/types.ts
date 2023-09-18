export type HolidayEntry = {
  holiday_date: Date | string;
  holiday_name: string;
  is_national_holiday: boolean;
};

export type GetHolidayEntriesResponse = Array<HolidayEntry>;

export type GetHolidayEntriesParams = {
  month?: number;
  year?: number;
};
