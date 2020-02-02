import React from 'react';
import PropTypes from 'prop-types';
import LoggedIn from './login/LoggedIn';
import SelectPath from './login/SelectPath';
import Login from './login/Login';
import Create from './login/Create';
import Error from './login/Error';

const DisplayOptions = props => {
  const { changeDisplay, handleLogout, auth, handleLogin, stage } = props;

  const options = {
    SELECT: (
      <div className="buttons">
        <button onClick={() => changeDisplay('LOGIN')}>Login</button>
        <button onClick={() => changeDisplay('CREATE')}>Sign Up</button>
      </div>
    ),
    LOGGED_IN_SUCCESS: <LoggedIn onClick={handleLogout} updateStage={changeDisplay}  />,
    LOGGED_IN: <SelectPath onClick={changeDisplay} auth={auth} logout={handleLogout}/>,
    LOGIN: <Login onClick={changeDisplay} onSubmit={handleLogin} />,
    CREATE: <Create onClick={changeDisplay} onSubmit={handleLogin} />,
    WRONG_EMAIL: (
      <Error reason="Wrong email was provided. Please try again." onClick={changeDisplay} location="LOGIN" />
    ),
    WRONG_PWORD: (
      <Error reason="The password entered was wrong. Please try again." onClick={changeDisplay} location="LOGIN" />
    ),
    USER_EXISTS: (
      <Error reason="A user already exists with your email. Please log in." onClick={changeDisplay} location="CREATE" />
    )
  };

  return options[stage];
};

DisplayOptions.propTypes = {
  changeDisplay: PropTypes.func,
  handleLogout: PropTypes.func,
  auth: PropTypes.bool,
  handleLogin: PropTypes.func,
  stage: PropTypes.string
};

export default DisplayOptions;
