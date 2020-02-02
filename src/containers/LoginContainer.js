import React, { useState } from 'react';
import '../styles/login_container.css';
import { getSessionValue, setSession, logoutSession } from '../helpers/Helpers';
import { login, logout } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import DisplayOptions from '../components/DisplayOptions';

function LoginContainer() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [stage, setStage] = useState(auth ? 'LOGGED_IN' : 'SELECT');
  const stages = {
    incorrect_password: 'WRONG_PWORD',
    incorrect_email: 'WRONG_EMAIL',
    user_exists: 'USER_EXISTS'
  };

  console.log(auth);

  const handleLogin = async (event, action) => {
    console.log('handle login');
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const body = { email, password };
    const tokenId = getSessionValue('token_id');
    const response = await fetch(`${process.env.REACT_APP_API}/api/users/${action}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: tokenId
      }
    });
    const tokenObj = response.ok ? await response.json() : false;
    console.log('TOKEN OBJ', tokenObj);
    const tokenInfo = tokenObj.token_info;
    if (tokenInfo) {
      console.log(tokenInfo);
      setSession(tokenInfo);
      // window.location.reload();
      dispatch(login());
      setStage('LOGGED_IN_SUCCESS');
    } else {
      const reason = tokenObj.error.replace(' ', '_').toLowerCase();
      console.log(stages[reason]);
      setStage(stages[reason]);
    }
  };

  const changeDisplay = stage => {
    setStage(stage);
  };

  const handleLogout = () => {
    logout();
    logoutSession();
    setStage('SELECT');
  };

  const mapping = {
    auth,
    changeDisplay,
    handleLogout,
    handleLogin,
    stage
  };

  return (
    <div id="login_container">
      <div className="display_container">
        <DisplayOptions {...mapping} />
      </div>
    </div>
  );
}

export default LoginContainer;
