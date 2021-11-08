import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100wh;
`;

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 20%;
  height: 100vh;
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 0.5rem;

  background-color: #ffffff;
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;

export const MapContainer2 = styled.div`
  display: flex;
  border: 1px solid red;
  width: 80%;
  height: 100vh;
`;

export const CarouselTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 120%;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 0;
  }
`;

export const ModalTitle = styled.p`
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  text-transform: none;
  font-size: 1.5rem;
  line-height: 125%;
  font-weight: bold;
`;

export const ModalContent = styled(ModalTitle)`
  font-size: 1rem;
  line-height: 150%;
  font-weight: normal;
`;

export const ModalRestaurantStatus = styled(ModalContent)`
  font-weight: bold;
`;
