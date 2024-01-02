import { CDN_URL } from "../utils/URLs";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 border-gray-300 border-b-2">
          <div className="py-2 text-left flex">

            <button className="absolute bg-green-50 text-black m-1 p-1 rounded-lg origin-bottom-right" onClick={()=>{
              // Dispatch an function
              dispatch(addItem(item))
              // So basically in place action.payload we are sending "kaddu" which will be added to our store
            }}>Add +</button>

            <img src={CDN_URL+item.card.info.imageId} className="w-36 pr-4"></img>
            <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
            </span>
          </div> 
            <p className="text-xs text-left">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;