import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId, id} = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        fetch(`http://localhost:5001/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    } , [])
    return (
        <div>

          <h3>purchase: {productId}</h3>
          <img src={product.img} alt="" />
          <h1>Name: {product.name}</h1>
        </div>
    );
};

export default ProductDetails;