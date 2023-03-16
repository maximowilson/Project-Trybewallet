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
    console.log(action);
    return { ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...action.expense,
      }] };
  case DELETE_EXPENSE: {
    console.log(action);
    return {
      ...state,
      expenses: action.expense,
    };
  }
  default:
    return state;
  }
};

export default wallet;
