import React from 'react';
import car from '../../../assets/images/banner.webp';
import car1 from '../../../assets/images/banner7.jpg';
import PrimaryButton from '../../Shared/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
            <div className="hero min-h-screen banner" style={{ backgroundImage: `url(${car})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='banner1 '>
                        <h3 className="mb-5 text-2xl font-bold">NEW TECHNOLOGY & BUILD </h3>
                        <h1 className="mb-5 text-4xl font-bold">LATEST & POWERFULL </h1>
                        <h1 className="mb-5 text-4xl font-bold">ENGINE FOR YOU</h1>
                        {/* <button className="btn bg-red-500">Shop Now</button> */}
                        <PrimaryButton>shop now</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;