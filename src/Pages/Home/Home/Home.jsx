import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PhotoGallery from '../Gallery/PhotoGallery';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <Category></Category>
        </div>
    );
};

export default Home;