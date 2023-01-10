import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors, reset }, handleSubmit } = useForm();

    const imgStorageKey = '0a83f762b983397e5f7b639f280c7350';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(result => {
                if(result.success){
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        supplier: data.supplier,
                        description: data.description,
                        price: data.price,
                        available_quantity: data.available_quantity,
                        minimum_order_quantity: data.minimum_order_quantity,
                        img:img
                    }
                    // send to your database

                    const url = 'http://localhost:5001/product';
                        fetch(url,{
                            method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(product)
                                })
                        
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('product',inserted);
                            if(inserted.insertedId){
                                toast.success('Product added successfully')
                                reset();
                            
                            }
                            else{
                                toast.error('Failed to add the product')
                            }
                        })
                }
           
        })
    }
    
    // const onSubmit = async (data) => {
    //     const url = 'http://localhost:5001/product';
    //     fetch(url,{
    //         method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(data)
    //             })
        
    //     .then(res =>{
    //          res.json()
    //          console.log(res)
    //         })
    //     .then(data => {
    //         console.log('data', data);
    //     })
    //     console.log('data', data);
    // };

    return (
        <div className='flex justify-center items-center my-8 h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-2xl text-center">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Supplier Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("supplier", {
                                    required: {
                                        value: true,
                                        message: 'Supplier is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.supplier?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplier.message}</span>}

                            </label>
                        </div>
                       
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-xs"

                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"

                                {...register("available_quantity", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Minimum Order Quantity"
                                className="input input-bordered w-full max-w-xs"

                                {...register("minimum_order_quantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minimum_order_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum_order_quantity.message}</span>}
                                
                            </label>
                        </div>
                        <input className='btn bg-red-500 text-white w-full max-w-xs' type="submit" value="Add" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;