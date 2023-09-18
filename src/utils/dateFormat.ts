export const dateFormat = (date: string | Date, time = false) => {
  const convertedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const optionsWithoutTime: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return Intl.DateTimeFormat(
    "id-ID",
    time ? options : optionsWithoutTime
  ).format(convertedDate);
};
