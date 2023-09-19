import { differenceInDays, format } from "date-fns";
// date-fns #2629 & #2694
// https://github.com/date-fns/date-fns/issues/2964#issuecomment-1397856471
import id from "date-fns/locale/id/index";

export const formatDate = (date: Date | string) =>
  format(new Date(date), "eeee, dd MMMM yyyy", {
    locale: id,
  });
