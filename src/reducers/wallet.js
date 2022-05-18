import { CURRENCY } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY:
    return { ...state,
      currencies: Object.keys(action.currency).filter((i) => i !== 'USDT'),
      expenses: action.expenses,
    };
  default:
    return state;
  }
}

export default wallet;
