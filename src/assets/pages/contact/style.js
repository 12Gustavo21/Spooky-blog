import styled, { keyframes } from "styled-components";

const bg = "#333";

const float = keyframes`
  from {
    transform: translateY(0.5em);
  }
  to {
    transform: translateY(-0.5em);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 8rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a0b0c;

  @media only screen and (width <= 600px) {
    padding: 6rem 0 0 0;
  }
`;

export const ContentWrapper = styled.section`
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const CanvasWrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 0;
  gap: 1rem;

  @media only screen and (width <= 600px) {
    gap: 0.5rem;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font: 400 4rem/3rem "Amatic SC", sans-serif;
  color: #ff6000;

  @media only screen and (width <= 600px) {
    font-size: 3rem;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 10vh;
  font: 400 1.125rem/1.625rem "Poppins", sans-serif;
  color: #ffa559;
`;

export const Conatiner = styled.div`
  animation: ${float} 3s infinite alternate;

  @media only screen and (width <= 600px) {
    position: relative;
    top: 1rem;
  }
`;

export const FormContact = styled.form`
  width: 30rem;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  position: relative;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(34, 39, 42, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  z-index: 2;

  .input {
    width: 14.5rem;
    padding: 1em;
    border: none;
    border-radius: 0.2em;
    background: #666;
    font: 400 1rem "Poppins", sans-serif;
    transition: all 0.3s ease-in-out;
    caret-color: #ff6000;

    &:focus {
      background: white;
      outline: #ff6000 solid 0.1rem;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .textarea {
    width: 14.5rem;
    height: 5rem;
    min-height: 5rem;
    max-height: 8rem;
    padding: 1em;
    border: none;
    border-radius: 0.2em;
    background: #666;
    caret-color: #ff6000;
    resize: vertical;
    font: 400 1rem "Poppins", sans-serif;
    transition: background 0.3s ease-in-out;

    &:focus {
      background: white;
      outline: #ff6000 solid 0.1rem;
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .button {
    width: 6.25rem;
    height: 2.5rem;
    font-weight: 100;
    font-size: 1rem;
    font-family: "Lora", serif;
    color: #666;
    letter-spacing: 0.02rem;
    word-wrap: break-word;
    text-align: center;
    background: transparent;
    border: 0.0625rem solid #666;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-decoration: none;
    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
      border-color: #ff6000;
      box-shadow: 0 0.5rem 0.5rem -0.4rem #ff6000;
      color: #ff6000;
      transform: translateY(-0.25rem);
    }
  }

  @media only screen and (width <= 600px) {
    width: 100%;
  }
`;

export const GhostContainer = styled.div`
  position: relative;
  bottom: 0.5rem;
`;

export const Ghost = styled.div`
  background: white;
  position: relative;
  color: white;

  * {
    transition: all 0.3s;
  }
  & > * {
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
  }
`;

export const GhostFace = styled.div`
  margin-bottom: 1em;
  background: none;

  .ghost-eyes {
    .ghost-eyes-l,
    .ghost-eyes-r {
      width: 0.8em;
      height: 0.8em;
      background: ${bg};
      border-radius: 100%;
      position: absolute;
      bottom: 0em;
    }

    .ghost-eyes-l {
      right: 1em;
    }
    .ghost-eyes-r {
      left: 1em;
    }
  }

  .ghost-mouth {
    width: 1em;
    height: 0.6em;
    border-radius: 50px;
    border: 0.2em solid ${bg};
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: relative;
    top: 0.5rem;

    &--open {
      border-top: 0.2em solid ${bg};
      height: 0.2em;
    }
  }
`;

export const GhostTorso = styled.div`
  width: 5em;
  height: 7em;
  background: white;
  border-radius: 100px;
  box-shadow: 0 0 12px rgba(66, 66, 66, 1);
  transition: all 0.3s ease-in-out;
  transform: translate(-50%, 50px);
  z-index: -1;
`;

export const GhostHands = styled.div`
  position: absolute;
  z-index: 3;

  .ghost-hands-r,
  .ghost-hands-l {
    border-radius: 100px;
    width: 1em;
    height: 1.5em;
    background: white;
    box-shadow: 0 4px 4px rgba(51, 51, 51, 0.3);
    top: -0.1rem;
    position: absolute;
  }

  .ghost-hands-r {
    transform: translateX(17em) rotate(15deg);

    @media only screen and (width <= 600px) {
      transform: translateX(10em) rotate(15deg);
    }
  }
  .ghost-hands-l {
    transform: translateX(12em) rotate(-15deg);

    @media only screen and (width <= 600px) {
      transform: translateX(5.5em) rotate(-15deg);
    }
  }
`;
