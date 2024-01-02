import { CDN_URL } from "../utils/URLs";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRating,
    } = resData?.info;

    return (
        <div className="card m-3 p-3 w-[220px] rounded-lg h-[370px] bg-gray-100 hover:bg-gray-300">
            <img className="rounded-md" src={CDN_URL + cloudinaryImageId}></img>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 className="pb-2">{cuisines.join(", ")}</h4>
            <h4 className="pb-2">★ {avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard  {...props}/>
            </div>
        );
    };
}

export default RestaurantCard;