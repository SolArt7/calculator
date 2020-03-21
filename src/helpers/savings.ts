import {getMonthsDiff} from './date'

export const calculateMonthly = (amount: number, date: Date): number => {
    const months = getMonthsDiff(date);
    return Number(amount) * months
};
export const calculateTotal = (amount: number, date: Date): number => {
    const months = getMonthsDiff(date);
    return (Number(amount) / months)
};
