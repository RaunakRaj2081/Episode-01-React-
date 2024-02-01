import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [Btns, setBtns] = useState("Login");

    const onslineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

// subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50  lg:bg-green-50">
            <div className="logo-container">
                <img className="w-28 ml-4" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-2">
                    <li className="px-4">
                        Online status: {onslineStatus ?"✅" : "❌"}
                    </li>

                    <li className="px-4"><Link to="/">Home</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/About">About Us</Link>
                    </li>

                    <li className="px-4">
                    <Link to="/Contact">Contact Us</Link>
                    </li>

                    <li className="px-4">
                        <Link to ='/Grocery'>Grocery</Link>
                    </li>

                    <li className="px-4">
                        <Link to = "/cart">
                        Cart - {cartItems.length} items
                        </Link>
                    </li>
                    <button className="login" 
                    onClick={() => {
                        Btns === "Login" ? setBtns("Logout") : setBtns("Login");                   
                         }}>
                            
                        {Btns}
                        </button>
                        {/* <li className="font-bold text-lg ml-3">
                            {loggedInUser}
                        </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;