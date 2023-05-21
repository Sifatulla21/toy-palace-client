import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Toy Paradise`;
    },[title])
};
export default useTitle;