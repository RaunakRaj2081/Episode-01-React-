import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        deliveryTime,
        cuisines,
        areaName,
    } = resData?.info ;
    return (
        <div 
        data-testid="resCard"
        className="w-[240px] p-4 m-8 rounded-md bg-gray-100 hover:bg-gray-200 ">
            <img src={CDN_URL +
            resData.info.cloudinaryImageId}
            className="rounded-lg"
            alt="res-logo"></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <div className="tg">
            <h4>{avgRating} stars</h4>
            <h4>. {resData.info.sla.deliveryTime} minutes</h4>
            </div>
            
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    promoted
               </label>
               <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;