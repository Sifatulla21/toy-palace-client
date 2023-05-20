import React, { useContext, useEffect } from 'react';
import Rating from 'react-rating';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" className="card w-96 bg-base-100 shadow-xl hover:shadow-xl transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <figure><img className="h-full" src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy}</h2>
                <p className="font-bold">Price: ${price}</p>
                <Rating
                        className="text-red-500 text-3xl"
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegHeart></FaRegHeart>}
                        placeholderSymbol={<FaHeart></FaHeart>}
                        fullSymbol={<FaHeart></FaHeart>}
                    />
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}><button onClick={handleShowMessage} className="btn btn-primary mb-2 font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryTab;