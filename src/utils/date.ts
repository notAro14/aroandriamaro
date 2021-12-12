import { formatDistanceToNow, isAfter as _isAfter, isBefore as _isBefore } from 'date-fns';

const toDate = (dateIso: string | Date): Date =>
  typeof dateIso === 'string' ? new Date(dateIso) : dateIso;

// Date formatting
export const distanceToNow = (dateIso: string | Date) =>
  formatDistanceToNow(toDate(dateIso));

export const isAfter = (a: string, b: string) => _isAfter(toDate(a), toDate(b))

export const isBefore = (a: string, b: string) => _isBefore(toDate(a), toDate(b))

