
import React from 'react';
import './ImageHotProduct.scss';
function ImageHotProduct(props) {
    const { src } = props;
    return (
        <>
          <img src = {src} className = "hot-image-product" />
        </>
    );
}

export default ImageHotProduct;