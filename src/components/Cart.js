import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    // Here don't just subscribe store then take store.cart.items , doing that is not incorrect but that is very inefficient , we just need to selct the item cart part not the whole store , we don't need to suscribe the whole store again and again
    const dispatch = useDispatch();

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-1 m-1 bg-black text-white rounded-lg" onClick={()=>{
                    dispatch(clearCart());
                }}>Clear Cart</button>
                {cartItems.length===0 && <h1>Your cart is empty . Add items to the cart !!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;