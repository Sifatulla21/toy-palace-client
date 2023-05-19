import React from 'react';

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
                <button className="btn btn-success btn-xs mb-2 font-bold">Details</button>
            </td>
        </tr>
    );
};

export default AllToyTable;