import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId, id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5001/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className=' flex justify-center items-center '>
            {/* <div className="card bg-base-100  my-12 shadow-xl">
                <figure>
                    <img src={product.img} alt="Movie" />
                </figure>


                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <h5>{product.description}</h5>
                    <h3>Available Quantity: {product.available_quantity}</h3>
                    <h3>Minimum Order Quantity: {product.minimum_order_quantity}</h3>
                    <h2>price: ${product.price}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;