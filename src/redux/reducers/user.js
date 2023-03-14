import { SAVE_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EMAIL:
    console.log(action);
    return {
      ...state,
      email: action.payload.payload,
    };
  default:
    return state;
  }
};

export default user;
