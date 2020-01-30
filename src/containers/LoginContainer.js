import React from 'react';
import '../styles/login_container.css';
import { getSessionValue, setSession, logOut } from '../helpers/Helpers';
import { login, logout } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function LoginContainer() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleSubmit = async event => {
    event.preventDefault();
    const email = event.target.email.value;
    // ref.current.style.background = 'yellow';
    console.log('hello');
    const password = event.target.password.value;
    const body = { email, password };
    const tokenId = getSessionValue('token_id');
    const response = await fetch(`${process.env.REACT_APP_API}/api/users/new_user`, {
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
    } else {
      alert(tokenObj.error);
    }
  };
  const deleteAll = async () => {
    const response = await fetch(`${process.env.REACT_APP_API}/api/users/delete_all`, {
      method: 'DELETE'
    });

    const info = response.ok ? await response.json() : false;
    console.log(info);
  };

  return !auth ? (
    <div id="login_container">
      <button className="delete_all" onClick={deleteAll}>
        Delete All
      </button>
      <form method="POST" className="login_form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
        <input type="submit" />
      </form>
    </div>
  ) : (
    <div id="login_container">
      <p>Logged In!</p>
      <button
        onClick={() => {
          logOut();
          dispatch(logout());
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default LoginContainer;
