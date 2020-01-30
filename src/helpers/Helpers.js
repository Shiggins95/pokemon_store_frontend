import { filterItems, removeFilter, restoreItems } from '../redux/actions';

/**
 * set window.local storage with auth credentials
 * @param {Object} tokenInfo - object of response token from api
 * @property {String} tokenInfo.token_id - jwt string
 * @property {Number} tokenInfo.expires_at - expiry date of token in milliseconds
 */
export const setSession = tokenInfo => {
  window.localStorage.setItem('token_id', tokenInfo.token_id);
  window.localStorage.setItem('expires_at', tokenInfo.expires_at);
  // console.log(window.localStorage);
};

export const getSessionValue = key => {
  return window.localStorage.getItem(key);
};

export const isAuthenticated = () => {
  const expires_at = parseInt(window.localStorage.getItem('expires_at'));
  // console.log('ED: ', expires_at);
  const currentDate = new Date().getTime();
  // console.log('CD: ', currentDate);

  return expires_at > currentDate;
};

export const logOut = () => {
  window.localStorage.removeItem('token_id');
  window.localStorage.removeItem('expires_at');
};

export const totalCartQuantity = items => {
  let cartQuantity = 0;
  items.forEach(item => {
    // console.log(item.cartQuantity);
    // console.log(typeof item.cartQuantity);
    cartQuantity += item.cartQuantity;
  });
  return cartQuantity;
};

export const updateFilters = (dispatch, filters, items, filter) => {
  if (filters.length === 1) {
    dispatch(removeFilter(filter));
    dispatch(restoreItems());
  } else {
    dispatch(removeFilter(filter));
    dispatch(filterItems(items));
  }
};

export const getFilteredItems = (items, filters) => {
  const filteredItems = [];
  // if 'oos' filter then filter any that have 0 quantity, then filter based on the other filters
  items.forEach(item => {
    if (filters.indexOf('oos') !== -1) {
      if (item.quantity > 0) {
        if (filters.length === 1) {
          filteredItems.push(item);
        } else {
          if (filters.indexOf(item.type) !== -1) {
            filteredItems.push(item);
          }
        }
      }
    } else {
      if (filters.indexOf(item.type) !== -1) {
        filteredItems.push(item);
      }
    }
  });
  return filteredItems;
};
