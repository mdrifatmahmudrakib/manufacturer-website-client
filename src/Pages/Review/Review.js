import React from 'react';
import ReviewData from '../../hooks/ReviewData';


import ShowReview from './ShowReview';

const Review = () => {
    const [reviews] = ReviewData()

    return (
        <div className='mx-auto'>
            <h2 className='mt-20 text-3xl font-bold text-center'>Customer Reviews</h2>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        reviews.map(review => <ShowReview
                            review={review}
                            key={review.id}
                        ></ShowReview>)
                    }
                </div>


            </div>

        </div>
    );
};

export default Review;