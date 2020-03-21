import moment from 'moment';

export const getMonthsDiff = (date: Date): number => {
  return Math.ceil(moment(date).diff(moment(), 'M', true));
};