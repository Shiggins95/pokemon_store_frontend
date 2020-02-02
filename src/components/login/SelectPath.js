import React from 'react';
import PropTypes from 'prop-types';

const SelectPath = props => {
  const { auth, onClick, logout } = props;
  const handleClick = () => {
    onClick('SELECT');
    logout();
  };
  return auth ? (
    <div className="logged_in">
      <button onClick={handleClick}>Logout</button>
    </div>
  ) : (
    <div className="buttons">
      <button onClick={() => onClick('LOGIN')}>Login</button>
      <button onClick={() => onClick('CREATE')}>Sign Up</button>
    </div>
  );
};

SelectPath.propTypes = {
  onClick: PropTypes.func,
  logout: PropTypes.func,
  auth: PropTypes.bool
};

export default SelectPath;
