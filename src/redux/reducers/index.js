import authReducer from './auth.js';
import { combineReducers } from 'redux';
import cartReducer from './cart';
import itemsReducer from './items';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  items: itemsReducer
});

export default rootReducer;
