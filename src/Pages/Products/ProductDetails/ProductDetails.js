import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import './ProductDetail.css'

const ProductDetails = () => {
    // const { register, formState: { errors }, handleSubmit} = useForm();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://manufacturer-website-nvqi.onrender.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [productId])

    const handlePlaceOrder = event => {
        event.preventDefault();
        const data = {
            name: user.displayName,
            email: user.email,
            product_name: product.name,
            price: product.price,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        console.log(data)

        const url = 'https://manufacturer-website-nvqi.onrender.com/order'
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
    }

    // const onSubmit = async (data) => {
    //     console.log(data)
    //     const url = 'https://manufacturer-website-nvqi.onrender.com/order'
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //         })
    // };
    return (

        <div className='grid grid-cols-1 my-14 md:grid-cols-2 gap-12'>
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

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="text-center font-bold text-2xl">Purchase</h2>

                    <form className='' onSubmit={handlePlaceOrder}>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={user.email} readOnly name='email' placeholder="Email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user.displayName} readOnly name='name' placeholder="password" className="input input-bordered w-full  " />
                        </div>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" value={product.name} readOnly name='price' placeholder="Product Name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" value={product.price} readOnly name='price' placeholder="Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Order Quantity" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name='address' placeholder="Address" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full" required />
                            {/* <label className="label">
                                <span className="label-text-alt">Alt label</span>
                            </label> */}
                        </div>
                        <input className='btn bg-red-500 my-3 text-white w-full max-w-xs' type="submit" value="Order" />
                    </form>


                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-96 max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                 value = {user?.displayName }
                                 readOnly
                                className="input input-bordered w-full max-w-xs"
                                {...register("user_name", {
                                    
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
                                value={user?.email || ''}
                                readOnly
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
                                placeholder= "Product Name"
                                readOnly
                                value={product?.name || ''}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                   
                                })}
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder= "Product Price"
                                value={product?.price || ''}
                                readOnly
                                // value={product?.name || '' }
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", { 

                                })}
                            />
                        </div>
                        <input className='btn bg-red-500 my-4 text-white w-full max-w-xs' type="submit" value="Order" />
                    </form> */}
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;