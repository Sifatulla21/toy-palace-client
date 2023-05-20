import React, { useEffect, useState } from 'react';
import AllToyTable from './AllToyTable';

const AllToy = () => {
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const handleSearch = () => {
        fetch(`http://localhost:5000//gettoysbytext/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAllToys(data);
          });
      };
    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className="text-center">
            <div className="ml-12">
                <div className="form-control text-center">
                    <div className="input-group">
                        <input onChange={(e)=>setSearchText(e.target.value)} type="text" placeholder="Search By Name" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
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