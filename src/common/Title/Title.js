import React from "react";
import "./Title.scss";
import PropTypes from "prop-types";

Title.propTypes = {};

function Title(props) {
  const { title } = props;
  return (
    <div className="title">
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
