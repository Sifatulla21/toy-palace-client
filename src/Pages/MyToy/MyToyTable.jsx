import React from 'react';

const MyToyTable = ({ toyInfo, handleDelete }) => {
    const { _id, sellerName, email, toy, photo, price, rating, quantity, category, details } = toyInfo;
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    <tr>
                        <th>
                            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="rounded w-24 h-24">
                                        {photo && <img src={photo} />}
                                    </div>
                                </div>
                                <div>
                                    {toy}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex flex-col">
                                <div>

                                    {sellerName}
                                </div>
                                <div>

                                    {email}
                                </div>
                            </div>
                        </td>
                        <td>
                            {price}
                        </td>
                        <td>{rating}</td>
                        <td>{quantity}</td>
                        <td>{category}</td>
                        {/* <th>
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                        </th> */}
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyToyTable;