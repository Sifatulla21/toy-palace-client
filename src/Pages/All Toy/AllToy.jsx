import React, { useEffect, useState } from 'react';
import AllToyTable from './AllToyTable';

const AllToy = () => {
    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const handleSearch = () => {
        fetch(`https://toy-place-server-rose.vercel.app/alltoystext/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllToys(data);
            });
    };
    useEffect(() => {
        fetch('https://toy-place-server-rose.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className="text-center">
            <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary">Total Number Of Toys: <span> {allToys.length}</span></h3>
            </div>
            <div>
                <div className="form-control text-center">
                    <div className="input-group flex justify-center ">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search By Name" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
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
                                <th>Action</th>
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