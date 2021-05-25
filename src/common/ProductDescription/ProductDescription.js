import React from "react";
import "./ProductDescription.scss";
import PropTypes from "prop-types";

ProductDescription.propTypes = {};

function ProductDescription(props) {
  const { title, price, description } = props;
  return (
    <div className="product-description">
      <div className="product-description__title">{title}</div>
      <div className="product-description__description">{description}</div>
      <div className="product-description__price">{price}.VNĐ</div>
    </div>
  );
}

export default ProductDescription;
