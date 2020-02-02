const navbarReducer = (state = false, action) => {
  if (action.type === 'UPDATE_NAVBAR') {
    return !state;
  }
  return state;
};

export default navbarReducer;
