import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Login = props => {
  const { onClick, onSubmit } = props;
  return (
    <div className="login_container_inner">
      <div className="back_button">
        <FontAwesomeIcon icon={faArrowLeft} id="fa_back_button" onClick={() => onClick('SELECT')} />
      </div>
      <form method="POST" className="login_form" onSubmit={event => onSubmit(event, 'login')}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
        <input type="submit" id="login_submit" value="Login" />
      </form>
    </div>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func,
  onClick: PropTypes.func
};

export default Login;
