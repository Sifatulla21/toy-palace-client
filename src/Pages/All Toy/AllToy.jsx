import React, { useEffect, useState } from 'react';
import AllToyTable from './AllToyTable';

const AllToy = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className="text-center">
            <div className="mt-4">
                <h3 className="text-2xl font-bold text-orange-600">All Toys:{allToys.length}</h3>
            </div>
            <div>
                <div className="container mx-auto overflow-x-auto w-full my-4">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Toy Name</th>
                                <th>Seller Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.map(allToy => <AllToyTable
                                    key={allToy._id}
                                    allToy={allToy}
                                ></AllToyTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToy;