import styled, { keyframes } from "styled-components";

const KeyframeLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }

`;

const LoadingSkeleton = styled.div`
  background: ${({ theme }) => theme.colors.text};
  border-radius: 6px;
  margin-bottom: 0.5rem;

  min-width: ${({ width }) => width};
  height: ${({ height }) => height};

  animation: ${KeyframeLoading} 500ms infinite alternate;
`;

export const Skeleton = ({ width, height }) => (
  <LoadingSkeleton width={width} height={height} />
);
