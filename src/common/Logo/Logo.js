import React from 'react';
import './Logo.scss';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

Logo.propTypes = {};

function Logo(props) {
  const { width, height, display } = props;
  return (
    <img
      src={logo}
      style={{
        width: width,
        height: height,
        display: display,
      }}
      className="logo"
    />
  );
}

export default Logo;
