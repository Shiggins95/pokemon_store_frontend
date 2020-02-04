export const login = () => {
  return {
    type: 'LOG_IN'
  };
};

export const logout = () => {
  return {
    type: 'LOG_OUT'
  };
};

export const addToCart = (item, items) => {
  return {
    type: 'ADD_TO_CART',
    item,
    items
  };
};

export const removeFromCart = item => {
  return {
    type: 'REMOVE_FROM_CART',
    item
  };
};

export const setItems = items => {
  return {
    type: 'SET_ITEMS',
    items
  };
};

export const showCart = () => {
  return {
    type: 'SHOW_CART'
  };
};

export const hideCart = () => {
  return {
    type: 'HIDE_CART'
  };
};

export const filterItems = items => {
  return {
    type: 'FILTER_ITEMS',
    items
  };
};

export const restoreItems = (value, items) => {
  return {
    type: 'RESTORE_ITEMS'
  };
};

export const addFilter = newFilter => {
  return {
    type: 'ADD_FILTER',
    newFilter
  };
};

export const removeFilter = filter => {
  return {
    type: 'REMOVE_FILTER',
    filter
  };
};

export const setFilteredItems = items => {
  return {
    type: 'SET_FILTERED_ITEMS',
    items
  };
};

export const hideOutOfStock = () => {
  return {
    type: 'HIDE_OOS'
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  };
};

export const updateItem = item => {
  // console.log('UPDATING');
  return {
    type: 'UPDATE_ITEM',
    item
  };
};

export const updateNav = () => {
  return {
    type: 'UPDATE_NAVBAR'
  };
};
