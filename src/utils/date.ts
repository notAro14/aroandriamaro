import { formatDistanceToNow } from 'date-fns';

const toDate = (dateIso: string | Date): Date =>
  typeof dateIso === 'string' ? new Date(dateIso) : dateIso;

// Date formatting
export const distanceToNow = (dateIso: string | Date) =>
  formatDistanceToNow(toDate(dateIso));
