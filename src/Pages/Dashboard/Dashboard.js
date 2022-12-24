import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const items = <>
        <li><Link className='font-bold btn btn-link' to="/dashboard">My Profile</Link></li>
        <li><Link className='font-bold btn btn-link' to="/dashboard/orders">MY Orders</Link></li>
    </>
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar">
                        {/* <div className="flex-none md:hidden">
                             <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> */}
                        <div className="flex-none hidden md:block">
                            <ul className="menu menu-vertical">
                            {items}
                            </ul>
                        </div>
                    </div>
                    <h2 className='text-center text-3xl font-bold'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {items}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;