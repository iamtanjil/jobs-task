import React from 'react';
import AllProducts from './AllProducts/AllProducts';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import PopularProduct from './PopularProduct/PopularProduct';
import Review from './Review/Review';
import TrendyNow from './TrendyNow/TrendyNow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProduct></PopularProduct>
            <AllProducts></AllProducts>
            <TrendyNow></TrendyNow>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;