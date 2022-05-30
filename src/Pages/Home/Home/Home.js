import React from 'react';
import AllReview from '../../Review/AllReview';
import BusinessSum from '../BusinessSum/BusinessSum';
import Contact from '../Contact/Contact';
import GimbalDetails from '../GimbalDetails/GimbalDetails';

import Banner from './Banner/Banner';
import HomeProduct from './HomeProduct/HomeProduct';


const Home = () => {
    return (
        <div >
            <Banner></Banner>

            <HomeProduct></HomeProduct>
            {/* <Reviews></Reviews> */}
            <AllReview></AllReview>
            <GimbalDetails></GimbalDetails>
            <BusinessSum></BusinessSum>
            <Contact></Contact>
        </div>
    );
};

export default Home;