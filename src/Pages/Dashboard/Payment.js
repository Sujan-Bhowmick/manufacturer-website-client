import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MCdnyEdQYVjfvABN9JHoXzB1SZTM9l7ahWKYJVzv1WReOxk5yfyKvMjPpozPMV3jj0lEVSx9r9tj53xHWbMsSpZ00D3aPKmRP');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5001/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center items-center ' >
            <div className="card w-full bg-base-100 max-w-md  shadow-xl">
                <div className="card-body">
                    <h1>Hello <span className='text-purple-500 font-bold'>{order.name}</span></h1>
                    <h2 className="card-title">Pay for <span className='text-orange-500'>{order.product_name}</span></h2>

                    <p>Please Pay: ${order.price}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 my-12">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order= {order}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;