import moment from 'moment';

export const calculateMonthly = (amount: number, date: Date): number => {
    const months = Math.ceil(moment(date).diff(moment(), 'M', true));
    return Number(amount) * months
};
export const calculateTotal = (amount: number, date: Date): number => {
    const months = Math.ceil(moment(date).diff(moment(), 'M', true));
    return (Number(amount) / months)
};
