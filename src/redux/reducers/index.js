import { combineReducers } from 'redux';
import user from './user';

// import wallet from './wallet';

const rootReducer = combineReducers({
  emailReducer: user,
});

export default rootReducer;
