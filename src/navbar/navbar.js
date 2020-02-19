import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { hideCart, logout, updateNav } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSession } from '../helpers/Helpers';

const NavBar = props => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.nav);
  const showCart = useSelector(state => state.cart.display);
  const auth = useSelector(state => state.auth);

  const className = display ? 'navbar show' : 'navbar hide';
  const showMenu = event => {
    dispatch(updateNav());
    if (showCart) {
      dispatch(hideCart());
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    logoutSession();
    dispatch(updateNav());
  };

  return (
    <div className="navbar_container">
      <div className="icon">
        <FontAwesomeIcon icon={faBars} className="fa_menu_bars" onClick={showMenu} data-testid="navbar-event-firer" />
      </div>
      <div className={className} data-testid="navbar-display">
        <Link to="/" className="link" onClick={showMenu}>
          Home
        </Link>
        {!auth ? (
          <Link to="/login" id="log_in_out_button" className="link" onClick={showMenu}>
            Login
          </Link>
        ) : (
          <Link to="/login" id="log_in_out_button" onClick={handleLogout} className="link">
            Log Out
          </Link>
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  auth: PropTypes.bool
};

export default NavBar;
