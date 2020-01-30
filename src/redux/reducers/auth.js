import { isAuthenticated } from '../../helpers/Helpers';

const authReducer = (state = isAuthenticated(), action) => {
  switch (action.type) {
    case 'LOG_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return state;
  }
};

export default authReducer;
