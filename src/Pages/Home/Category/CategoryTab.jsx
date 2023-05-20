import React, { useContext } from 'react';
import Rating from 'react-rating';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const CategoryTab = ({ toys }) => {
    const { user } = useContext(AuthContext);
    const { _id, toy, photo, price, rating} = toys;
    const handleShowMessage =()=>{
        if(user===null){
            swal.fire( 'You have to log in first to view details','','warning');
        }
        console.log(use);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="" /></figure>
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