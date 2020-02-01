import authReducer from './auth.js';
import { combineReducers } from 'redux';
import cartReducer from './cart';
import itemsReducer from './items';
import navbarReducer from './navbar';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  items: itemsReducer,
  nav: navbarReducer
});

export default rootReducer;
