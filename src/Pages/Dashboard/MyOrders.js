
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [deletingOrder, setDeletingOrder] = useState(null)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5001/order?email=${user?.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                })
        }

    }, [user])
    
    const handleDelete = id => {

   window.confirm('Are you sure?');
        // if (proceed) {
        fetch(`http://localhost:5001/order/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res)
                res.json()
            })
            .then(result => {
                console.log(result);
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);

                // if(result.deletedCount){
                // toast.success(`order is deleted`)
                // setDeletingOrder(null)
                // }
            })
        }

    return (
        <div>
            {/* <h2 className='text-center'>Orders:{orders.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.product_name}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-xs btn-primary'>Pay</button></Link>}
                                    {(order.price && order.paid) && <Link to={``}> <span className='text-success'>Paid</span></Link>}
                                </td>
                                {/* <td>
                                    <label onClick={() => setDeletingOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                                    <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
                                    <div className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete user ${order.name}!</h3>
                                            <div className="modal-action">
                                                <button onClick={() => handleDelete(order._id)} className="btn btn-xs btn-error">Delete</button>
                                                <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                                            </div>
                                        </div>
                                    </div>
                                </td> */}

                                <td>
                                    {
                                        !order.paid &&  <button onClick={() => handleDelete(order._id)} className='btn btn-primary btn-xs'>Delete</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;