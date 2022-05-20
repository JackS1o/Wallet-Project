import { CURRENCY, FORM_STATE, REMOVE_LIST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY:
    return { ...state,
      currencies: Object.keys(action.currency).filter((coins) => coins !== 'USDT'),
    };
  case FORM_STATE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_LIST:
    return {
      ...state,
      expenses: [...action.removed],
    };
  default:
    return state;
  }
}

export default wallet;
