import { Link } from 'react-router-dom';
import error from '../../assets/error.jpg';
import useTitle from '../../Hooks/useTitle';

const ErrorPage = () => {
    useTitle("404 not found");
    return (
        <div>
            <img className="w-[500px] h-[500px] mx-auto" src={error} alt="" />
            <div className="flex justify-center">
            <Link to="/"><button className="btn btn-primary">Go Back To Home</button></Link>

            </div>
        </div>
    );
};

export default ErrorPage;