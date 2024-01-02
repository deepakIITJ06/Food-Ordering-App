import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setshowIndex}) => {
    // const [showIndex, setshowIndex] = useState(false);

    // Now it is a controlled component

    const handleClick = () => {
        setshowIndex();
    }
    return (
        <div>
            <div className="w-9/12 m-auto my-4 bg-gray-50 shadow-xl p-3">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;