import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const sliceTimeString = (time: string) =>
  time.split('').reverse().slice(3).reverse().join('');

export const sliceDateString = (date: string, form: string) =>
  format(new Date(date), form, {
    locale: ko,
  });
