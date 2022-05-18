export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCY = 'CURRENCY';

export const userEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const currentCurrency = (currency) => ({
  type: CURRENCY,
  currency,
});
