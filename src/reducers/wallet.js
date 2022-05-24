import { CURRENCY, FORM_STATE, REMOVE_LIST, CHANGE_BTN, NEW_VALUES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editExpenses: { isOnEditMode: false, id: 0 },
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
  case CHANGE_BTN:
    return {
      ...state,
      editExpenses: { isOnEditMode: action.edit, id: action.id },
    };
  case NEW_VALUES:
    return {
      ...state,
      expenses: state.expenses.map((despesa) => {
        if (despesa.id === state.editExpenses.id) {
          return { ...action.obj, exchangeRates: despesa.exchangeRates };
        }
        return despesa;
      }),
      editExpenses: { isOnEditMode: false, id: 0 },
    };
  default:
    return state;
  }
}

export default wallet;
