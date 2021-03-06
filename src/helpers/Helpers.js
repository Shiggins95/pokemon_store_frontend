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

export const logoutSession = () => {
  window.localStorage.removeItem('token_id');
  window.localStorage.removeItem('expires_at');
};

export const totalCartQuantity = items => {
  let cartQuantity = 0;
  items.forEach(item => {
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
  const sorting = ['price_asc', 'price_desc', 'default'];
  let sortIndex = false;
  let sortingExists = false;
  filters.forEach((filter, index) => {
    if (sorting.indexOf(filter) !== -1) {
      sortingExists = true;
      sortIndex = index;
    }
  });
  // console.log(filters[sortIndex]);
  // console.log(sortingExists);
  let newFilters = filters;
  // if 'oos' filter then filter any that have 0 quantity, then filter based on the other filters
  if (sortingExists && sortIndex !== false) {
    switch (filters[sortIndex]) {
      case 'default':
        items = items.sort((item1, item2) => parseInt(item1.id, 10) - parseInt(item2.id, 10));
        newFilters = filters.filter(filter => filter !== 'default');
        break;
      case 'price_desc':
        // console.log('case 1', newFilters);
        items = items.sort((item1, item2) => item2.price - item1.price);
        newFilters = filters.filter(filter => filter !== 'price_desc');
        // console.log('case 2', newFilters);
        break;
      case 'price_asc':
        items = items.sort((item1, item2) => item1.price - item2.price);
        newFilters = filters.filter(filter => filter !== 'price_asc');
        break;
      default:
        break;
    }
  }

  if (newFilters.length === 0) {
    return { filteredItems: items, newFilters };
  }

  // console.log('FILTERS', newFilters);
  items.forEach(item => {
    if (newFilters.indexOf('oos') !== -1) {
      if (item.quantity > 0) {
        if (newFilters.length === 1) {
          filteredItems.push(item);
        } else {
          if (newFilters.indexOf(item.type) !== -1) {
            filteredItems.push(item);
          }
        }
      }
    } else {
      if (newFilters.indexOf(item.type) !== -1) {
        filteredItems.push(item);
      }
    }
  });
  return { filteredItems, newFilters };
};
