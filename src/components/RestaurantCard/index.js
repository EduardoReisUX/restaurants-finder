import {
  Restaurant,
  RestaurantAddress,
  RestaurantInfo,
  RestaurantPhoto,
  RestaurantTitle,
} from "./styles";
import ReactStars from "react-rating-stars-component";
import restauranteFake from "../../assets/restaurante-fake.png";
import { useState } from "react";
import { Skeleton } from "../Skeleton";

export const RestaurantCard = ({ restaurant, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <RestaurantTitle>
          {restaurant.name || "Nome do restaurante"}
        </RestaurantTitle>
        <ReactStars
          count={5}
          isHalf
          edit={false}
          value={restaurant.rating || 4}
          activeColor="#E7711C"
        />
        <RestaurantAddress>
          {restaurant.vicinity ||
            restaurant.formatted_address ||
            "Endereço do restaurante"}
        </RestaurantAddress>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={isLoading}
        src={
          restaurant.photos ? restaurant.photos[0].getUrl() : restauranteFake
        }
        onLoad={() => setIsLoading(true)}
        alt={"foto do restaurante"}
      />
      {!isLoading && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};
