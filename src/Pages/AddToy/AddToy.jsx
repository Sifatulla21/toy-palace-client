import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const toy = form.toy.value;
        const email = user?.email;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const toys = {
            sellerName: name,
            email,
            toy,
            photo,
            price,
            rating,
            quantity,
            category,
            details
        }
        console.log(toys);
        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(toys)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Service Book Successfully');
            }
        })
    }
    return (
        <div className="container mx-auto mb-8">
            <h2 className="text-center text-3xl">Add A Toy</h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-2 gap-6">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Seller Name" readOnly defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toy" placeholder="Toy Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" readOnly defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name="category" className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select Category</option>
                            <option>Sports Car</option>
                            <option>Mini Fire Truck</option>
                            <option>Mini Police Car</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea placeholder="Details" name="details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Book Service" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;