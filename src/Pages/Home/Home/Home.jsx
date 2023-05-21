import React, { useEffect } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PhotoGallery from '../Gallery/PhotoGallery';


const Home = () => {
    useTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Category></Category>
        </div>
    );
};

export default Home;