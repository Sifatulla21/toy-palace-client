import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const ViewDetails = () => {
    const toyDetails = useLoaderData();
    useTitle("Details");
    const { _id, sellerName, email, toy, photo, price, rating, quantity, details } = toyDetails;
    return (
        <div>
        <div className="container mx-auto overflow-x-auto w-full">
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
        </tr>

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ViewDetails;