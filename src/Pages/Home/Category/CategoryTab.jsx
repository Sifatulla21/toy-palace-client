import React, { useContext, useEffect } from 'react';
import Rating from 'react-rating';
import { FaArrowRight, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.css'
import { AuthContext } from '../../../Provider/AuthProvider';

const CategoryTab = ({ toys }) => {
    useEffect(() => {
        AOS.init();
      }, []);
      
    const { user } = useContext(AuthContext);
    const { _id, toy, photo, price, rating} = toys;
    const handleShowMessage =()=>{
        if(user===null){
            swal.fire( 'You have to log in first to view details','','warning');
        }
        console.log(use);
    }
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="500"  className="card-container bg-red-100 rounded-lg  overflow-hidden max-w-md mx-auto my-2 shadow-2xl bg-base-100   hover:shadow-xl transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img src={photo} alt="Product Image" className="card-image" />
      <div className="card-content p-4">
        <div className="flex items-center justify-between my-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{toy}</h3>
            <p className="text-2xl font-bold text-gray-500 mt-2">Price: <span className="text-xl font-bold text-blue-600">${price}</span></p>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex items-center">
          <Rating
                        className="text-red-500 text-3xl"
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegHeart></FaRegHeart>}
                        placeholderSymbol={<FaHeart></FaHeart>}
                        fullSymbol={<FaHeart></FaHeart>}
                    />
          </div>
          <Link to={`/toy/${_id}`}><button onClick={handleShowMessage} className="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white py-2 px-4 rounded-full">
          <FaArrowRight></FaArrowRight>
          </button></Link>
        </div>
      </div>
    </div>

    );
};

export default CategoryTab;