const navbarReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_NAVBAR':
      return true;
    case 'HIDE_NAVBAR':
      return false;
    default:
      return false;
  }
};

export default navbarReducer;
