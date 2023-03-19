import {
  SAVE_COIN,
  SAVE_EXPENSES,
  ADD_NEW_EXPENSE,
  DELETE_EXPENSE,
} from '../actions/index';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_COIN:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: action.expenses,
    };
  case ADD_NEW_EXPENSE:
    return { ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.expense,
      }] };
  case DELETE_EXPENSE: {
    return {
      ...state,
      expenses: [...(state.expenses
        .filter((expense) => expense.id !== action.expense.id))],
    };
  }
  default:
    return state;
  }
};

export default wallet;
