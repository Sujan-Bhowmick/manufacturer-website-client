import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, img, available_quantity, minimum_order_quantity, price, description } = product;
    
    const navigate = useNavigate();
    const navigateToProductDetails = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='card lg:max-w-lg bg-base-100 shadow-xl my-12'>
            <img src={img} alt="" />
            <div className='card-body'>
                <h2>Name: {name}</h2>
                <p>Description: {description}</p>
                <h3>Available Quantity: {available_quantity}</h3>
                <h3>Minimum Order Quantity: {minimum_order_quantity}</h3>
                <h2>price: ${price}</h2>
                <div className=" justify-center">
                <button onClick={() => navigateToProductDetails(_id)} className="btn  bg-red-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;