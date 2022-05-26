import React from 'react';
import gimble01 from '../../../Images/gimble01.png'
const GimbalDetails = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <figure>
                    <img src={gimble01} className="w-full" alt="Slider1" />
                </figure>
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                        <h3 className="text-left text-4xl text-white font-bold">
                            NEW TECHNOLOGY & BUILD
                        </h3>
                        <h2 className="text-left text-7xl text-white font-bold">
                            WHEELS & TIRES
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GimbalDetails;