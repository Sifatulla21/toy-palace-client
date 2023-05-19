import React from 'react';

const AllToyTable = ({allToy}) => {
    const {_id, sellerName, toy, photo, price, quantity, category} = allToy;
    return (
        <div>
            <table>
                <tr>
                    <th>Photo</th>
                    <th>Seller</th>
                    <th>Toy Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th></th>
                </tr>
                <tr>
                    <img className="w-24 h-24" src={photo} alt="" />
                </tr>
                <tr>
                    {toy}
                </tr>
                <tr> 
                    {sellerName}
                </tr>
                <tr>
                    {price}
                </tr>
                <tr>
                    {quantity}
                </tr>
                <tr>
                    {category}
                </tr>
            </table>
        </div>
    );
};

export default AllToyTable;