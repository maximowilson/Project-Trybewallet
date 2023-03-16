import { SAVE_COIN, SAVE_EXPENSES, ADD_NEW_EXPENSE } from '../actions/index';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_COIN:
    console.log(action);
    return {
      ...state,
      currencies: action.currencies,
    };
  case SAVE_EXPENSES:
    console.log(action);
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
  default:
    return state;
  }
};

export default wallet;
