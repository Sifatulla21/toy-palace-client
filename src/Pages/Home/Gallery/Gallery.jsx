import car1 from '../../../assets/Banner/car1.jpg';
import car2 from '../../../assets/Banner/car2.jpg';
import car3 from '../../../assets/Banner/car3.jpg';
import car4 from '../../../assets/Banner/car4.jpg';
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const photos = [
        `${car1}`,
        `${car2}`,
        `${car3}`,
        `${car4}`,
      ];
    
      return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
        <Marquee speed={150} gradient="true" direction="right" pauseOnHover="true"> 
        <div className="flex flex-wrap justify-center">
          {photos.map((photo, index) => (
            <div key={index} className="w-64 h-64 rounded-lg overflow-hidden shadow-lg m-4 relative">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        </Marquee>

        </div>
      );
};

export default Gallery;