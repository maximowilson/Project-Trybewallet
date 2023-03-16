export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_COIN = 'SAVE_COIN';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const ADD_NEW_EXPENSE = 'ADD_NEW_EXPENSE';

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  email: payload,
});

export const saveCoin = (currencies) => ({
  type: SAVE_COIN,
  currencies,
});

export const saveExpenses = (expenses) => ({
  type: SAVE_EXPENSES,
  expenses,
});

export const newExpense = (expense) => ({
  type: ADD_NEW_EXPENSE,
  expense,
});
