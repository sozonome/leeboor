import { fetcher } from '@/services/api/fetcher';
import type {
  GetHolidayEntriesParams,
  GetHolidayEntriesResponse,
} from './types';

export const getHolidays = (params?: GetHolidayEntriesParams) =>
  fetcher<GetHolidayEntriesResponse>('/', { params });
