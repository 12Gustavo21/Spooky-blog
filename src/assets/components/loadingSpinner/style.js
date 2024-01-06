import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.section`
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    .spinner-border {
      width: 5rem;
      height: 5rem;
      border: 0.5rem solid #ff6000;
      border-radius: 50%;
      border-top-color: transparent;
      animation: ${spin} 1s linear infinite;
    }
  }
`;
