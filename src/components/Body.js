import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext} from "react";
import { SWIGGY_API } from "../utils/URLs";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineImage from "../utils/OfflineImage.jpeg";
import userContext from "../utils/userContext";

// Chunking
// Dynamic bundling
// Code splitting
// On demand loading
// Dynamic import
// Lazy loading => In the beginning, the grocery store is not present, and only when we navigate to the grocery page does it load; this is why it is referred to as lazy loading


const Body = () => {
    // Here useState is an object in simple words (super poerful object)
    // Local State Variable => Super Powerul variable

    const {loggedInUser,setuserName} = useContext(userContext);

    const [Total_res, setTotal_res] = useState([]);
    const [FilteredRest, setFilteredRest] = useState([]);
    const [searchText, setsearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const fetchData = async () => {
        const MyData = await fetch(SWIGGY_API);

        const json = await MyData.json();
        // console.log(json);


        // If you have API for data then take empty array with useState and then do the below step
        setTotal_res(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // useEffect always takes two arguments
    useEffect(() => {
        fetchData();
    }, []);

    // You can add Shimmer here also, for showing dummy res during waiting time of fetching data

    
    // Conditional rendering
    if(Total_res.length === 0) {
        return <Shimmer />
    }
    
    if(onlineStatus===false) {
        return (
            <div>
                <img src={OfflineImage}></img>
                <h1>Oops !! looks like you are offline</h1>
                <h2>Please check your internet connection !!</h2>
            </div>
        )
    }

    return (
        <div className="body">
            <div className="filter_res flex">
                <div className="search p-4 rounded-lg">
                    <input 
                        className="border bordeer-solid border-black w-64 rounded-md"
                        type="text"
                        placeholder=" Search your favourite resaturants"
                        value={searchText}
                        onChange={(e)=>{
                            setsearchText(e.target.value);
                        }}
                    />
                    <button className=" px-2 py-2 bg-green-200 m-4 rounded-lg" onClick={()=>{
                        const filtered_res = Total_res.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRest(filtered_res);
                    }}>
                    Search
                    </button>
                </div>
                <div className="flex items-center">
                    <button 
                        className="px-2 py-2 bg-gray-200 rounded-lg"
                        onClick={()=>{
                            const filteredRestaurants = Total_res.filter((res) => res.info.avgRating > 4);
                            setFilteredRest(filteredRestaurants);
                        }}
                    >
                    Top Rated Restaurants
                    </button>
                </div>
                <div className="p-4 rounded-lg">
                    <label>UserName : </label>
                    <input 
                    className="border bordeer-solid border-black w-50 rounded-md px-2 mt-6"
                    type="text"
                    placeholder="Write your UserName"
                    value={loggedInUser}
                    onChange={(e)=>setuserName(e.target.value)}
                    >
                        
                    </input>
                </div>
            </div>
            <div className="restaurant-list flex flex-wrap">
                {FilteredRest.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id} 
                    to={"/restaurants/"+restaurant.info.id}>
                    {restaurant.info.avgRating > 4.3 ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;