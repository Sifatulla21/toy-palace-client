import React from 'react';

const MyToyTable = ({ toyInfo, handleDelete }) => {
    const { _id, sellerName, email, toy, photo, price, rating, quantity, category, details } = toyInfo;
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
            <td>
                {details}
            </td>
            <th>
                <div className="flex flex-col">
                    <button className="btn btn-success btn-xs mb-2 font-bold">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error font-bold">
                        Remove
                    </button>
                </div>
            </th>
        </tr>
    );
};

export default MyToyTable;