import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toyInfo = useLoaderData();
    const { _id, sellerName, email, toy, photo, price, rating, quantity, category, details } = toyInfo;
    const handleUpdate = () => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const toys = {
            price,
            quantity,
            details
        } || {}
        console.log(toys);
        fetch(`http://localhost:5000/updatetoy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >0) {
                    Swal.fire('Toy Updated Successfully', '', 'success');
                }
            })
    }
    return (

        <div className="container mx-auto mb-8">

            <form className="border-double border-4 border-indigo-600 p-4 shadow-lg" onSubmit={handleUpdate}>
                <h3 className="text-center text-3xl font-bold my-4">Update:  <span className="text-primary">{toy}</span></h3>
                <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-2 gap-6">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Seller Name" readOnly defaultValue={sellerName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toy" defaultValue={toy} placeholder="Toy Name" readOnly className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" readOnly defaultValue={email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" readOnly defaultValue={photo} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" readOnly defaultValue={rating} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select defaultValue={category} name="category" className="select select-bordered w-full max-w-xs">
                            <option disabled>Sports Car</option>
                            <option disabled>Mini Fire Truck</option>
                            <option disabled>Mini Police Car</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea defaultValue={details} placeholder="Details" name="details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;