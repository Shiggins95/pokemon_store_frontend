import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { isAuthenticated } from '../../helpers/Helpers';

const LoggedIn = props => {
  const { onClick, updateStage } = props;
  if (!isAuthenticated()) {
    updateStage('SELECT');
  }
  return (
    <div className="buttons">
      <div className="logged_in">
        <p>Logged In</p>
        <button onClick={onClick}>Logout</button>
        <Link to="/">
          <button>Shop Products</button>
        </Link>
      </div>
    </div>
  );
};

LoggedIn.propTypes = {
  onClick: PropTypes.func,
  updateStage: PropTypes.func
};

export default LoggedIn;
