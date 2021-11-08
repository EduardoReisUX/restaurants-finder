import { useEffect, useState } from "react";
import styled from "styled-components";
import { Skeleton } from "../Skeleton";

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 0.25rem;
  border-radius: 6px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: white;
  font-size: 1rem;
`;

export const ImageCard = ({ photo, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.onload = () => setIsLoading(true);
  }, [photo]);

  return (
    <>
      {!isLoading ? (
        <Card photo={photo}>
          <Title>{title || "Nome do restaurante"}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};
