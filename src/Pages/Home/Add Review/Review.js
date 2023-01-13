import React from 'react';

const Review = ({ review }) => {
    const { name, description, img } = review;
    return (
        <div className="card md:max-w-md bg-base-100 shadow-xl my-12">
            <div className="card-body">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p> {review.rating}</p>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default Review;