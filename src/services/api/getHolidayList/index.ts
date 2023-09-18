import { fetcher } from "@/services/api/fetcher";
import type {
  GetHolidayEntriesParams,
  GetHolidayEntriesResponse
} from "./types";

export const getHolidayEntries = (params?: GetHolidayEntriesParams) =>
  fetcher<GetHolidayEntriesResponse>("/", { params });
