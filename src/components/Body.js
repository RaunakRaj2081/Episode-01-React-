import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState , useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    
    const [searchText , setsearchText] = useState("");

    const [filteredRestaurant , setfilteredRestaurant] = useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    useEffect(()=> {
        fetchData();
    } , []);
   
    const fetchData = async () => {
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onslineStatus = useOnlineStatus();

    if(onslineStatus === false)
    return (
       <h1>Looks like you are offline!! , Please check your internet connection</h1>
);


    return listOfRestaurants.length === 0 ? (<Shimmer /> ):(
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input 
                    type = "text" 
                    data-testid = "searchInput"
                    className="border border-solid border-black rounded-sm"
                    value = {searchText}
                    onChange ={ (e) => {
                        setsearchText(e.target.value);
                    }
                    }/>
                    <button className="m-4 px-4 py-2 bg-green-100 rounded-md" 
                    onClick = {()=>{
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setfilteredRestaurant(filteredRestaurant);
                    }}>
                        search
                    </button>
                </div>
              <div className="m-2 p-2 flex items-center">
              <button className="px-4 py-2 bg-gray-100 rounded-md"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => 
                    res.info.avgRating > 4.4
                    );
                    setfilteredRestaurant(filteredList);
                }}>
                    Top Rated Restaurants</button>
              </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant?.map((restaurant) => (
                        <Link key={restaurant?.info?.id} 
                        to = {"/restaurants/" + restaurant?.info?.id}>
                            {
                                restaurant?.info?.promoted ? (
                                    <RestaurantCardPromoted resData={restaurant} />
                                ) : (<RestaurantCard  resData ={restaurant} />)
                            }
                         </Link>
                    ))
                    }            
            </div>
        </div>
    );
};

export default Body ;