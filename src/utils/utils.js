import BigNumber from 'bignumber.js';

export const BIG_ZERO = new BigNumber(0);
export const BIG_TEN = new BigNumber(10);

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const getNumber = (number, decimalsToAppear, decimals = 18) => {
  return new BigNumber(number).dividedBy(BIG_TEN.pow(decimals)).toFixed(decimalsToAppear);
};
