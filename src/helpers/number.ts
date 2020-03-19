export const numberWithCommas = (x: string | number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const clearNumberWithCommas = (x: string | number) => {
  return x.toString().replace(/,/g, '');
};

export const numberRegexp = /^([0-9]*)$/;