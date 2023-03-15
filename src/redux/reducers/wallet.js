import { SAVE_COIN } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
