import { useState , useEffect} from "react";
import { MENU_API } from "./URLs";

const useRestaurantMenu = (resId) => {
    const [resMenu,setresMenu] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MENU_API+resId);

        const json = await data.json();

        setresMenu(json.data);
    }
    return resMenu;
}

export default useRestaurantMenu;