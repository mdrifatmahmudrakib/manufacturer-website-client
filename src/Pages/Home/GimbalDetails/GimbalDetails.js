import React from 'react';
import gimble01 from '../../../Images/gimble01.png'
const GimbalDetails = () => {
    return (
        // <div className="hero min-h-screen ">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <img src={gimble01} className="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


        //         </div>

        //     </div>

        // </div>

        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={gimble01} alt="" />
                <div>
                    <h1 class="text-5xl font-bold">6-8 Hours Battery Life</h1>
                    <p class="py-6 text-2xl">Two 13250 batteries each with a 850mAh capacity gives the MF Action Gimbal a battery life of up to 8 hours on a single charge.</p>
                    <button class="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default GimbalDetails;