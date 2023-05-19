import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [toysInfo, setToysInfo] = useState([]);
    const url =`http://localhost:5000/toys?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data => setToysInfo(data))
    },[url]);

    const handleDelete = id =>{
        const proceed = confirm('Are You Sure You Want To Delete?');
        if(proceed){
            fetch(`http://localhost:5000/toys/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    alert('Deleted Successfully');
                    const remaining = toysInfo.filter(toyInfo => toyInfo._id !== id);
                    setToysInfo(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h3 className="text-center text-3xl font-bold">Your Toys: {toysInfo.length}</h3>
            {
                toysInfo.map(toyInfo =><MyToyTable
                    key={toyInfo._id}
                    toyInfo={toyInfo}
                    handleDelete={handleDelete}
                ></MyToyTable>)
            }
        </div>
    );
};

export default MyToy;