import React, { useEffect, useState } from 'react';

import Review from '../Home/Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })


    return (
        // <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
        //     <div class="w-full text-center pb-8">


        //         <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
        //             Find some testimonials about me
        //         </h1>
        //         <p class="text-gray-400 font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m</p>
        //     </div>
        //     <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        //         {/* <div class="bg-white rounded-lg p-6">
        //             <div class="flex items-center space-x-6 mb-4">
        //                 <img class="h-28 w-28 object-cover object-center rounded-full"
        //                     src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
        //                 <div>
        //                     <p class="text-xl text-gray-700 font-normal mb-1">Dany Bailey</p>
        //                     <p class="text-base text-blue-600 font-normal">Software Engineer</p>
        //                 </div>
        //             </div>
        //             <div>
        //                 <p class="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        //             </div>
        //         </div>
        //         <div class="bg-white rounded-lg p-6">
        //             <div class="flex items-center space-x-6 mb-4">
        //                 <img class="h-28 w-28 object-cover object-center rounded-full"
        //                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
        //                 <div>
        //                     <p class="text-xl text-gray-700 font-normal mb-1">Lucy Carter</p>
        //                     <p class="text-base text-blue-600 font-normal">Graphic Designer</p>
        //                 </div>
        //             </div>
        //             <div>
        //                 <p class="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        //             </div>
        //         </div>
        //         <div class="bg-white rounded-lg p-6">
        //             <div class="flex items-center space-x-6 mb-4">
        //                 <img class="h-28 w-28 object-cover object-center rounded-full"
        //                     src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo" />
        //                 <div>
        //                     <p class="text-xl text-gray-700 font-normal mb-1">Jade Bradley</p>
        //                     <p class="text-base text-blue-600 font-normal">Dev Ops</p>
        //                 </div>
        //             </div>
        //             <div>
        //                 <p class="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        //             </div>
        //         </div>
        //         <div class="bg-white rounded-lg p-6">
        //             <div class="flex items-center space-x-6 mb-4">
        //                 <img class="h-28 w-28 object-cover object-center rounded-full"
        //                     src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
        //                 <div>
        //                     <p class="text-xl text-gray-700 font-normal mb-1">Lucy Carter</p>
        //                     <p class="text-base text-blue-600 font-normal">Graphic Designer</p>
        //                 </div>
        //             </div>
        //             <div>
        //                 <p class="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        //             </div>
        //         </div> */}

        //         {
        //             reviews.map(review => <Review
        //                 key={review._id}
        //                 review={review}
        //             ></Review>)
        //         }
        //     </div>
        // </section>

        <div className='px-12'>
            <div className='lg:py-12 sm:py-0'>
                <div className='text-center'>
                    <h2 className='text-3xl py-2 text-primary font-bold'>Customer Review</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;