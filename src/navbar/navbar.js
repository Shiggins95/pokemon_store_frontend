import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const NavBar = props => {
  // const { auth } = props;
  const [displayNav, setDisplayNav] = useState();

  const className = displayNav ? 'navbar show' : 'navbar hide';
  // const color = displayNav ? 'black' : 'white';
  const showMenu = event => {
    setDisplayNav(!displayNav);
  };
  return (
    <div className="navbar_container">
      <div className="icon">
        <FontAwesomeIcon icon={faBars} className="fa_menu_bars" onClick={showMenu} data-testid="navbar-event-firer" />
      </div>
      <div className={className} data-testid="navbar-display">
        <Link to="/cart ">
          <FontAwesomeIcon icon={faShoppingCart} className="fa_cart" onClick={showMenu} />
        </Link>
        <Link to="/" className="link" onClick={showMenu}>
          Home
        </Link>
        <Link to="/store_home" className="link" onClick={showMenu}>
          Shop Products
        </Link>
        <Link to="/login" id="log_in_out_button" className="link" onClick={showMenu}>
          Login
        </Link>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  auth: PropTypes.bool
  // displayNav: PropTypes.bool,
  // setDisplayNav: PropTypes.func
};

export default NavBar;
