import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/URLs";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const resMenu = useRestaurantMenu(resId);

    const [showIndex,setshowIndex] = useState(null);

    if(resMenu.length === 0) {
        return <Shimmer />
    }

    // const resMenu = useRestaurantMenu(resId);
    const {name, cuisines, costForTwoMessage} =  resMenu?.cards[0]?.card?.card?.info;
    const {itemCards} = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    // console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const category = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="menu text-center">
            <h1 className="font-bold text-2xl my-5">{name}</h1>
            <h2 className="text-md font-bold">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <p>
                {category.map((c, index)=>
                    // Controlled component
                    <RestaurantCategory 
                    key={c?.card?.card?.title} 
                    data={c?.card?.card} 
                    showItems={index===showIndex ? true : false}
                    setshowIndex = {()=>setshowIndex(index)}
                    />
                )}
            </p>
            {/* <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {" Rs. "}{item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu;