import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const toyDetails = useLoaderData();
    const { _id, sellerName, email, toy, photo, price, rating, quantity, details } = toyDetails;
    return (
        <div>
        <div className="container mx-auto overflow-x-auto w-full">
            <h3 className="text-center text-3xl font-bold">Your Toys: {toyDetails.toy}</h3>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
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
                {email}
            </td>
            <td>
                {rating}
            </td>
            <td>
                {price}
            </td>
            <td>
                {quantity}
            </td>
            <td>
                {details}
            </td>
            <th>
                <div className="flex flex-col">
                    <button className="btn btn-success btn-xs mb-2 font-bold">Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error font-bold">
                        Remove
                    </button>
                </div>
            </th>
        </tr>

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ViewDetails;