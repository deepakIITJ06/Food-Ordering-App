import { useState } from "react";
import { LOGO_URL } from "../utils/URLs";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnfunc, setbtnfunc] = useState("login")
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(userContext);

    // Subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems); 

    return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-green-50">
        <div className="logoContainer">
            <img className="w-36 h-36" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4 font-bold">Online Status : {onlineStatus ? "🟢":"🔴"}</li>
                <li className="px-4 font-bold">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 font-bold">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-4 font-bold">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4 font-bold">
                    <Link to="/grocery">Grocery Store</Link>
                </li>
                <li className="px-4 font-bold">
                    <Link to="/cart">Cart ({cartItems.length})</Link>
                </li>
                <button className="px-4 font-bold" onClick={()=>{
                    btnfunc==="login" ? setbtnfunc("logout") : setbtnfunc("login")
                }}>
                    {btnfunc}
                </button>
                <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>
    );
}

export default Header;