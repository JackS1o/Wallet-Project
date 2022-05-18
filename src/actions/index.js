export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCY = 'CURRENCY';
export const MOEDA = 'MOEDA';

export const userEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const currentCurrency = (currency) => ({
  type: CURRENCY,
  currency,
});

export const currentMoeda = () => ({
  type: MOEDA,
});

export function fetchApi() {
  return async (dispatch) => {
    dispatch(currentMoeda());
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const data = await response.json();
    return dispatch(currentCurrency(data));
  };
}
