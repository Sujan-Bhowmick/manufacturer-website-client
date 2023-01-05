import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const ProductDetails = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);


    useEffect(() => {
        fetch(`http://localhost:5001/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [productId])

    const onSubmit = async (data) => {
        console.log(data)
        const url = 'http://localhost:5001/order'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };
    return (

        <div className='grid grid-cols-1 my-8 md:grid-cols-2 gap-12'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{user?.email}</p>
                    <h5>{product.description}</h5>
                    <h3>Available Quantity: {product.available_quantity}</h3>
                    <h3>Minimum Order Quantity: {product.minimum_order_quantity}</h3>
                    <h2>price: ${product.price}</h2>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                <h2 className="text-center font-bold text-2xl">Purchase</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value = {user?.displayName}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    
                                })}
                            />
                           
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={user?.email}
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                   
                                })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Phone Number"
                                className="input input-bordered w-full max-w-xs"

                                {...register("phone_number", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone_number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone_number.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered w-full max-w-xs"

                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                disabled value={product.name}
                                placeholder= "Product Name"
                                // disabled value={product?.name || '' }
                                className="input input-bordered w-full max-w-xs"
                                {...register("product_name", {
                                   
                                })}
                            />
                        </div>
                        <input className='btn bg-red-500 my-4 text-white w-full max-w-xs' type="submit" value="Order" />
                    </form>
                </div>
            </div>

        </div>
    );
};
export default ProductDetails;