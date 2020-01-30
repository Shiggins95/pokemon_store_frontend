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

export const addToCart = (itemId, items) => {
  return {
    type: 'ADD_TO_CART',
    itemId,
    items
  };
};

export const removeFromCart = itemId => {
  return {
    type: 'REMOVE_FROM_CART',
    itemId
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
