import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2';
import MyToyTable from "./MyToyTable";


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toysInfo, setToysInfo] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys?email=${user?.email}&sort=${sortOrder}`)
            .then(res => res.json())
            .then(data => setToysInfo(data))
    }, [sortOrder]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-place-server-rose.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = toysInfo.filter(toyInfo => toyInfo._id !== id);
                            setToysInfo(remaining);
                        }
                    })
            }
        });
    };
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };
    return (
        <div>
            <div className="container mx-auto overflow-x-auto w-full">
                <h3 className="text-center text-3xl font-bold text-primary">My Toys: {toysInfo.length}</h3>
                <div >
                {/* className="flex flex-row-reverse" */}
                    Sort Toys:
                    <select value={sortOrder} onChange={handleSortChange}>
                        <option value="asc">Price(Low To High)</option>
                        <option value="desc">Price(High To Low)</option>
                    </select>
                </div>
                <table className="table table-zebra w-full mt-4">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toysInfo.map(toyInfo => <MyToyTable
                                key={toyInfo._id}
                                toyInfo={toyInfo}
                                handleDelete={handleDelete}
                            ></MyToyTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;