import styled from "styled-components";

export const Card = styled.div`
  width: 40rem;
  height: 20rem;
  border-radius: 1.25rem;
  background: #0f1927;
  box-shadow: 0.125rem 0.125rem 6.25rem 0 rgba(0, 0, 0, 0.2);

  @media only screen and (width <= 680px) {
    width: 100%;
    height: 15rem;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 1.25rem;

  div {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    gap: 1rem;
    border-radius: 1.25rem;
    opacity: 0;
    transform: translateY(100%);
    z-index: 2;
    transition: all 0.3s ease-in-out;

    h3 {
      font: 400 1.5rem/2rem "Poppins", sans-serif;
      color: #fff;
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font: 400 1rem/1.5rem "Poppins", sans-serif;
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: #ff6000;
        }
      }
    }
  }

  &:hover {
    div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 1.25rem 1.25rem 0 0;
`;