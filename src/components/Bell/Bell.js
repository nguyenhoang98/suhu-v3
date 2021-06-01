import React from 'react';
import './Bell.scss';
import PropTypes from 'prop-types';

Bell.propTypes = {};

function Bell(props) {
  const { handleToggleNoti } = props;
  return (
    <div className="bell" onClick={handleToggleNoti}>
      <span>
        <i class="far fa-bell"></i>
      </span>
      <span className="bell__count">
        <span className="bell__count__number">0</span>
      </span>
    </div>
  );
}

export default Bell;
