import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import CategoryTab from './CategoryTab';


const Category = () => {
    const { user } = useContext(AuthContext);
    const [toysInfo, setToysInfo] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState("Sports Car");
    useEffect(() => {
        fetch(`https://toy-place-server-rose.vercel.app/alltoy?category=${categoryInfo}`)
            .then(res => res.json())
            .then(data => setToysInfo(data))
    }, [categoryInfo]);
    const handleCategory = value => {
        setCategoryInfo(value);
    }

    return (
        <div className="container mx-auto my-24">
            <h1 className="text-center text-3xl font-bold">Choose Car By Category</h1>
            <div className=" flex justify-center my-24">
                <div>
                    <button className="btn btn-primary mr-4" onClick={() => handleCategory('Sports Car')}>Sports Car</button>
                </div>
                <div>
                    <button className="btn btn-primary mr-4" onClick={() => handleCategory('Mini Fire Truck')}>Mini Fire Truck</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => handleCategory('Mini Police Car')}>Mini Police Car</button>

                </div>
            </div>
            <h1 className="text-3xl text-blue-500 font-bold text-center my-4">{categoryInfo}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-8">

                {
                    toysInfo.map(toys => <CategoryTab  
                        key={toys._id}
                        toys={toys}

                    >

                    </CategoryTab>)
                }
            </div>
        </div>
    );
};

export default Category;