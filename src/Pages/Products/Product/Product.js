import React from 'react';

const Product = ({product}) => {
    const {name, img, quantity,price, description} = product;
    return (
        <div>
            <img src= {img} alt="" />
            <h2>Name: {name}</h2>
            <p>Description: {description}</p>
             <h3>Quantity: {quantity}</h3>
            <h2>price: ${price}</h2>
        </div>
    );
};

export default Product;