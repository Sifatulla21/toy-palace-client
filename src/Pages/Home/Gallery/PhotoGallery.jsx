import React, { useEffect, useState } from 'react';
import './PhotoGallery.css';
import car1 from '../../../assets/Banner/car1.jpg';
import car2 from '../../../assets/Banner/car2.jpg';
import car3 from '../../../assets/Banner/car3.jpg';
import car4 from '../../../assets/Banner/car4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('https://toy-place-server-rose.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, []);
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500" className="container mx-auto photo-gallery">
      {allToys.map(toy => (
        <div className="photo-item" key={toy._id}>
          <img className="photo-size" src={toy.photo} />
          <div className="caption">{toy.toy}</div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
