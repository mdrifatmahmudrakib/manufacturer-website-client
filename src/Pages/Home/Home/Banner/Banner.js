import React from 'react';
import banner from '../../../../Images/back-banner.jpg'
const Banner = () => {
    return (


        <div style={{
            background: `url(${banner}) `
        }}
            class="hero min-h-screen" >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-white">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">MF Action Gimbal</h1>
                    <p class="mb-5">All of the action, non of the shakes</p>
                    <p class="mb-5">With 3-Axis there is more flexibility in the angles you shoot. 320° Pan/Tilt rotation lets you get the desired angle with smooth footage.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>


    );
};

export default Banner;