import {
  formatDistanceToNow as _formatDistanceToNow,
  isAfter as _isAfter,
  isBefore as _isBefore,
} from 'date-fns';

const toDate = (dateIso: string | Date): Date =>
  typeof dateIso === 'string' ? new Date(dateIso) : dateIso;

// Date formatting
export const distanceToNow = (dateIso: string | Date) =>
  _formatDistanceToNow(toDate(dateIso));

export const isAfter = (date: string | Date, dateToCompare: string | Date) =>
  _isAfter(toDate(date), toDate(dateToCompare));

export const isBefore = (date: string | Date, dateToCompare: string | Date) =>
  _isBefore(toDate(date), toDate(dateToCompare));
