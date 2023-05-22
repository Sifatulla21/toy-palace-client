import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToyTable = ({ toyInfo, handleDelete }) => {
    const { _id, sellerName, email, toy, photo, price, rating, quantity, category, details } = toyInfo;
    return (
        <tr className=" shadow-lg hover:shadow-xl transition duration-1000 ease-in transform hover:-translate-y-1 hover:scale-1">
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
                {email}
            </td>
            <td>
                {rating}
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
            <td className="py-2 whitespace-normal break-words">
                {details}
            </td>
            <th>
                <div className="flex">
                    <Link to={`${_id}`}> <button className=" mr-4 text-3xl"><FaEdit className="text-purple-700"></FaEdit></button></Link>
                    <button onClick={() => handleDelete(_id)} className="ml-2 text-3xl">
                        <FaTrash className="text-red-700"></FaTrash>
                    </button>
                </div>
            </th>
        </tr>
    );
};

export default MyToyTable;