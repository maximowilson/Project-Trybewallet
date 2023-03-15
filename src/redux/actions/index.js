export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (payload) => ({
  type: SAVE_EMAIL,
  email: payload,
});

export const SAVE_COIN = 'SAVE_COIN';

export const saveCoin = (currencies) => ({
  type: SAVE_COIN,
  currencies,
});
