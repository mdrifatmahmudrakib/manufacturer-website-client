import React from 'react';
import ReviewData from '../../hooks/ReviewData';
import ShowReview from './ShowReview';

const AllReview = () => {
    const [reviews] = ReviewData()
    return (
        <div>
            <h3 className='m-10 text-primary text-center text-4xl font-bold'>All Reviews</h3>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <ShowReview key={review.id} review={review}></ShowReview>)
                }
            </div>

        </div>
    );
};
export default AllReview;