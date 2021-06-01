import React from 'react';
import './Title.scss';
import PropTypes from 'prop-types';

Title.propTypes = {};

function Title(props) {
  const { title, icon, size, spacing } = props;
  return (
    <div className="title">
      <h2
        style={{
          fontSize: size,
          letterSpacing: spacing,
        }}
      >
        {icon} {title}
      </h2>
    </div>
  );
}

export default Title;
