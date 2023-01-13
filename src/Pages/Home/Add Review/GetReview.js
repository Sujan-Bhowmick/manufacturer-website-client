import React, { useEffect, useState } from 'react';
import Review from './Review';

const GetReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5001/review'
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='font-bold text-center text-2xl'>Review</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default GetReview;