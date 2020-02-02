import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Create = props => {
  const { onSubmit, onClick } = props;
  return (
    <div className="login_container_inner">
      <div className="back_button">
        <FontAwesomeIcon icon={faArrowLeft} id="fa_back_button" onClick={() => onClick('SELECT')} />
      </div>
      <form className="create_form" onSubmit={event => onSubmit(event, 'create')}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
        <div className="checkbox">
          <div className="label">
            <label htmlFor="ts_cs_checkbox">
              I have read and I agree to the{' '}
              <Link to="/ts_and_cs" target="_blank">
                Terms and Conditions
              </Link>
            </label>
          </div>
          <div className="check">
            <input type="checkbox" id="ts_cs_checkbox" name="ts_cs_checkbox" required />
          </div>
        </div>
        <input type="submit" id="login_submit" />
      </form>
    </div>
  );
};

Create.propTypes = {
  onSubmit: PropTypes.func,
  onClick: PropTypes.func
};

export default Create;
