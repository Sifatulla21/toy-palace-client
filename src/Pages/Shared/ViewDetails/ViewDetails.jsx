import { FaHeart, FaRegHeart } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const ViewDetails = () => {
    const toyDetails = useLoaderData();
    useTitle("Details");
    const { _id, sellerName, email, toy, photo, price, rating, quantity, details } = toyDetails;
    return (
        <div className="flex justify-center items-center container mx-auto my-12">
        <div className="bg-gradient-to-r from-[rgba(94,105,104,0.16290266106442575)] to-[rgba(88,85,92,0.2665441176470589)] p-4">
          <div className="lg:flex justify-between">
            <div className="w-1/2 pt-8">
              <img src={photo} alt={toy} className="w-full" />
            </div>
            <div className="w-1/2 px-24 pt-8 pb-12">
              <h1 className="text-4xl font-bold mb-12">{toy}</h1>
              <p className="text-xl text-gray-600">Seller: {sellerName}</p>
              <p className="text-sm text-gray-600 mb-12">Email: {email}</p>
              <p className="text-3xl font-bold text-blue-500 mt-2">Price: ${price}</p>
              <div className="flex items-center mt-2">
                <Rating
                        className="text-red-500 text-3xl"
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegHeart></FaRegHeart>}
                        placeholderSymbol={<FaHeart></FaHeart>}
                        fullSymbol={<FaHeart></FaHeart>}
                    />
              </div>
              <p className="text-3xl font-bold mt-2">Available Quantity: <span className="text-primary">{quantity}</span></p>
              <p className="mt-12 text-3xl font-bold">Description</p>
              <p className="py-2 whitespace-normal break-words w-1/2 text-gray-800 lg:text-2xl ">{details}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewDetails;