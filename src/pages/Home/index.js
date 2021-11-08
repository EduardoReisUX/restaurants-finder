import React, { useState } from "react";
import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
  ModalRestaurantStatus,
} from "./styles";
import { Map, Modal, RestaurantCard, ImageCard } from "../../components";
import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";
/* Material UI */
import "@material/react-text-field/dist/text-field.css";
import "@material/react-material-icon/dist/material-icon.css";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
/* React Slick */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Loader } from "../../components/Loader";
import { Skeleton } from "../../components/Skeleton";

export const Home = () => {
  const { restaurants, restaurantSelected } = useSelector(
    (state) => state.restaurants
  );
  const [value, setValue] = useState("");
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(value);
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do Restaurant Finder" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={value}
              onKeyPress={handleKeyPress}
              onChange={(e) => setValue(e.target.value)}
            />
          </TextField>
          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map((restaurant) => (
                  <ImageCard
                    key={restaurant.place_id}
                    photo={
                      restaurant.photos
                        ? restaurant.photos[0].getUrl()
                        : restaurante
                    }
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>

      <Map query={query} placeId={placeId} />

      <Modal open={modalOpened} onClose={() => setModalOpened(false)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>
              Número: {restaurantSelected?.formatted_phone_number}
            </ModalContent>
            <ModalContent>
              Endereço: {restaurantSelected?.formatted_address}
            </ModalContent>
            <ModalRestaurantStatus>
              {restaurantSelected?.opening_hours?.open_now
                ? "Aberto agora"
                : "Fechado neste momento"}
            </ModalRestaurantStatus>
          </>
        ) : (
          <>
            <Skeleton width="1rem" height="1rem" />
            <Skeleton width="1rem" height="1rem" />
            <Skeleton width="1rem" height="1rem" />
            <Skeleton width="1rem" height="1rem" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};
