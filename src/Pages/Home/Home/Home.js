import React from 'react';
import BusinessSum from '../BusinessSum/BusinessSum';
import GimbalDetails from '../GimbalDetails/GimbalDetails';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import HomeProduct from './HomeProduct/HomeProduct';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <HomeProduct></HomeProduct>
            <Reviews></Reviews>
            <GimbalDetails></GimbalDetails>
            <BusinessSum></BusinessSum>
        </div>
    );
};

export default Home;