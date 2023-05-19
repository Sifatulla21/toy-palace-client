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
                {
                    allToys.map(allToy => <AllToyTable
                        key={allToy._id}
                        allToy={allToy}
                    ></AllToyTable>)
                }
            </div>
        </div>
    );
};

export default AllToy;