import { CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY:
    return { ...state,
      currencies: Object.keys(action.currency).filter((coins) => coins !== 'USDT'),
      expenses: action.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
