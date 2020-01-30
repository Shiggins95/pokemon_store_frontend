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
