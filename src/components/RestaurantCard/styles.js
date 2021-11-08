import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 0.25rem;
  padding: 1rem;
  background: #ffffff;

  border-left: 5px solid transparent;

  :hover {
    background: ${({ theme }) => theme.colors.background};
    border-left-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RestaurantTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const RestaurantAddress = styled.span`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  line-height: 150%;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const RestaurantPhoto = styled.img`
  display: ${({ imageLoaded }) => (imageLoaded ? "block" : "none")};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;
