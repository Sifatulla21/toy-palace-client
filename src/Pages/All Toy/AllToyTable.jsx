import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTable = ({ allToy }) => {
    const { _id, sellerName, toy, photo, price, quantity, category } = allToy;
    return (
        <tr>
            <td>
                <div className="w-24 h-24">
                    {photo && <img src={photo} />}
                </div>
            </td>
            <td>
                {toy}
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                {price}
            </td>
            <td>
                {category}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                <Link to={`/toy/${_id}`}><button className="btn btn-success btn-xs mb-2 font-bold">Details</button></Link>
                
            </td>
        </tr>
    );
};

export default AllToyTable;