import car1 from '../../../assets/Banner/car1.jpg';
import car2 from '../../../assets/Banner/car2.jpg';
import car3 from '../../../assets/Banner/car3.jpg';
import car4 from '../../../assets/Banner/car4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
      return (
        <div className="relative container mx-auto my-12">
        <img src={car2} alt="Banner" className="w-full h-[500px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Welcome to our Toy Shop!</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white">Discover the joy of childhood.</p>
            <button className="mt-6 py-2 px-6 bg-yellow-400 text-white text-lg font-medium rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-300 ease-in-out">
              Explore
            </button>
          </div>
        </div>
      </div>
      );
    };

export default Banner;