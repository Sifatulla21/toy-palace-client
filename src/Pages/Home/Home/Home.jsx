import React, { useEffect } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ContactPage from '../ContactUs/ContactPage';
import PhotoGallery from '../Gallery/PhotoGallery';
import Stats from '../Stats/Stats';
import UserReview from '../UserReview/UserReview';


const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Category></Category>
            <UserReview></UserReview>
            <Stats></Stats>
            <ContactPage></ContactPage>
        </div>
    );
};

export default Home;