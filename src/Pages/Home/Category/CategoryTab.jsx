import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const CategoryTab = ({ toys }) => {
    const { user } = useContext(AuthContext);
    const { _id, toy, photo, price, rating} = toys;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy}</h2>
                <p className="font-bold">Price: ${price}</p>
                <p className="font-bold">{rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}><button onClick={handleShowMessage} className="btn btn-primary mb-2 font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryTab;