import { Link } from 'react-router-dom';
import error from '../../assets/error.jpg';

const ErrorPage = () => {
    return (
        <div>
            <img className="w-[500px] h-[500px] mx-auto" src={error} alt="" />
            <Link to="/"><button className="btn btn-primary">Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;