import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Error = props => {
  const { onClick, location, reason } = props;
  return (
    <div className="wrong_email">
      <div className="back_button">
        <FontAwesomeIcon icon={faArrowLeft} id="fa_back_button" onClick={() => onClick(location)} />
      </div>
      <p>{reason}</p>
      <button onClick={() => onClick(location)}>Try Again</button>
    </div>
  );
};

Error.propTypes = {
  onClick: PropTypes.func,
  location: PropTypes.string,
  reason: PropTypes.string,
};

export default Error;
