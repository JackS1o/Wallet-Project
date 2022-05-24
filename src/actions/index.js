export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCY = 'CURRENCY';
export const FORM_STATE = 'FORM_STATE';
export const REMOVE_LIST = 'REMOVE_LIST';
export const NORMAL_LIST = 'NORMAL_LIST';
export const CHANGE_BTN = 'CHANGE_BTN';
export const NEW_VALUES = 'NEW_VALUES';

export const userEmail = (email) => ({
  type: USER_EMAIL,
  email,
});

export const currentCurrency = (currency) => ({
  type: CURRENCY,
  currency,
});

export const formState = (payload) => ({
  type: FORM_STATE,
  payload,
});

export const removeList = (removed) => ({
  type: REMOVE_LIST,
  removed,
});

export const normalList = (list) => ({
  type: NORMAL_LIST,
  list,
});

export const changeBtn = (edit, id) => ({
  type: CHANGE_BTN,
  edit,
  id,
});

export const sendNewValuesActions = (obj) => ({
  type: NEW_VALUES,
  obj,
});

export function fetchApi() {
  return async (dispatch) => {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const data = await response.json();
    return dispatch(currentCurrency(data));
  };
}
