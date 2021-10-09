import {
  format as dateFnsFormat,
  addMinutes as dateFnsAddMinutes,
  isBefore as dateFnsIsBefore,
  isAfter as dateFnsIsAfter,
} from 'date-fns';

// Types
type DateStringFormat =
  | 'dd/MM/yyyy' // 08/09/2021
  | 'yyyy-MM-dd' // 2021-09-08
  | 'HH:mm' // 08:30
  | 'EEEE dd MMMM yyyy'; // mercredi 08 septembre 2021
type GetDateFormatFunc = (
  format: DateStringFormat
) => (dateIso: string | Date) => string;
type DateComparisonFunc = (
  dateIso: string | Date,
  dateIsoToCompare: string | Date
) => boolean;

const toDate = (dateIso: string | Date): Date =>
  typeof dateIso === 'string' ? new Date(dateIso) : dateIso;

// Date formatting
export const getDateFormatFunc: GetDateFormatFunc = (format) => (dateIso) =>
  dateFnsFormat(toDate(dateIso), format as string);
export const formatDate = getDateFormatFunc('dd/MM/yyyy');
export const formatDatePretty = getDateFormatFunc('EEEE dd MMMM yyyy');
export const formatHour = getDateFormatFunc('HH:mm');

// Date computing
export const addMinutes = (dateIso: string | Date, minutes: number): Date =>
  dateFnsAddMinutes(toDate(dateIso), minutes);

// Date comparison
export const isBefore: DateComparisonFunc = (dateIso, dateIsoToCompare) => {
  const date = toDate(dateIso);
  const dateToCompare =
    typeof dateIsoToCompare === 'string'
      ? new Date(dateIsoToCompare)
      : dateIsoToCompare;
  return dateFnsIsBefore(date, dateToCompare);
};
export const isAfter: DateComparisonFunc = (dateIso, dateIsoToCompare) => {
  const date = toDate(dateIso);
  const dateToCompare =
    typeof dateIsoToCompare === 'string'
      ? new Date(dateIsoToCompare)
      : dateIsoToCompare;
  return dateFnsIsAfter(date, dateToCompare);
};
