import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer.js';
import NavBar from './navbar/navbar.js';
// import { isAuthenticated } from './helpers/Helpers';
import './styles/app.css';
import StoreContainer from './containers/StoreContainer';
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector(state => state.auth);
  // console.log('AUTH: ', auth);
  return (
    <Router>
      <div className="app_container">
        <div className="nav_container">
          <NavBar auth={auth} />
        </div>
        <div className="routes_container">
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/store_home" component={StoreContainer} />
        </div>
      </div>
    </Router>
  );
}

export default App;
