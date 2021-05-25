
import React from 'react';
import './ImageNewProduct.scss' ;

function ImageNewProduct(props) {
    const { src } = props;
    return (
        <>
        <img src = {src} className = "new-product-image" alt = "product-image" />
        </>
    );
}

export default ImageNewProduct;