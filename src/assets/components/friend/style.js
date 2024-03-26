import styled, { keyframes } from "styled-components";

const speak = keyframes`
  0% {
    height: .3125rem;
  }
  50% {
    height: .9375rem;
  }
  100% {
    height: .3125rem;
  }
`;

export const FriendMessage = styled.section`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  width: 9rem;
  height: 8.5vh;
  background-color: #f5f5f5;
  border-radius: 0.625rem;
  padding: 0.625rem;
  position: fixed;
  z-index: 9;
  top: 60%;
  left: 88%;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  transition: 1s display ease;

  &:before {
    content: "";
    width: 0.625rem;
    height: 0.625rem;
    background-color: #f5f5f5;
    position: absolute;
    bottom: -0.3125rem;
    left: 80%;
    z-index: 1;
    transform: translateX(-50%) rotate(45deg);
  }

  @media only screen and (max-width: 1200px) {
    left: 86%;
  }

  @media only screen and (max-width: 1024px) {
    left: 82%;
  }

  @media only screen and (max-width: 800px) {
    left: 78%;
  }

  @media only screen and (max-width: 650px) {
    left: 74%;
    width: 8rem;
  }

  @media only screen and (max-width: 500px) {
    left: 70%;
    top: 58%;
    width: 7rem;
    height: 9.5vh;
  }

  @media only screen and (max-width: 375px) {
    left: 64%;
  }
`;

export const FriendMessageText = styled.p`
  font: 500 0.75rem/1rem "Poppins", sans-serif;
  letter-spacing: -0.015rem;
  color: #333;
  text-align: center;
  transition: 1s all ease;
  z-index: 2;

  @media only screen and (max-width: 650px) {
    font-size: 0.68rem;
  }
`;

export const FriendContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 70%;
  left: ${(props) => (props.clicked ? "93%" : "97%")};
  transition: 1s all ease;

  @media only screen and (max-width: 1200px) {
    left: ${(props) => (props.clicked ? "91%" : "94%")};
  }

  @media only screen and (max-width: 1024px) {
    left: ${(props) => (props.clicked ? "89%" : "94%")};
  }

  @media only screen and (max-width: 800px) {
    left: ${(props) => (props.clicked ? "85%" : "91%")};
  }

  @media only screen and (max-width: 500px) {
    left: ${(props) => (props.clicked ? "79%" : "88%")};
  }

  @media only screen and (max-width: 375px) {
    left: ${(props) => (props.clicked ? "75%" : "85%")};
  }
`;

export const Friend = styled.div`
  width: ${(props) => (props.clicked ? "6.25rem" : "6.875rem")};
  height: 5rem;
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 3.125rem 0 0 3.125rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0.625rem rgba(255, 255, 255, 0.5);
  transition: 1s all ease;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.clicked ? "6.25rem" : "7.5rem")};
  }

  @media only screen and (max-width: 650px) {
    width: ${(props) => (props.clicked ? "5.5rem" : "7.5rem")};
  }

  @media only screen and (max-width: 500px) {
    width: ${(props) => (props.clicked ? "5rem" : "7rem")};
    height: 4.5rem;
  }
`;

export const FriendEyeWrapper = styled.div`
  position: relative;
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 500px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const FriendEyes = styled.div`
  width: 0.9375rem;
  height: 0.9375rem;
  background-color: #333;
  border-radius: 50%;
  position: absolute;
  transition: 1s all ease;

  &:first-child {
    bottom: ${(props) => (props.clicked ? "1.5625rem" : "1.875rem")};
    left: ${(props) => (props.clicked ? "1.25rem" : "0")};
  }

  &:last-child {
    top: 1.5625rem;
  }

  @media only screen and (max-width: 1024px) {
    &:first-child {
      bottom: ${(props) => (props.clicked ? "1.5625rem" : "1.875rem")};
      left: ${(props) => (props.clicked ? ".5rem" : "-.7rem")};
    }

    &:last-child {
      top: 1.8rem;
      right: 3rem;
    }
  }

  @media only screen and (max-width: 500px) {
    width: 0.75rem;
    height: 0.75rem;

    &:first-child {
      bottom: ${(props) => (props.clicked ? "1.25rem" : "1.6rem")};
      left: ${(props) => (props.clicked ? ".5rem" : "-.7rem")};
    }

    &:last-child {
      top: 1.5rem;
      right: 2.5rem;
    }
  }
`;

export const FriendMouth = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  position: absolute;
  left: 3.5rem;
  top: 3.125rem;
  border: 0.125rem solid #333;
  background-color: #333;
  width: 0.9375rem;
  height: 0.625rem;
  border-radius: 0 0 0.625rem 0.625rem;
  animation: ${speak} 2s infinite;
  transform: rotate(-45deg);
  transition: 1s all ease;

  @media only screen and (max-width: 500px) {
    left: 2.8rem;
    top: 2.8rem;
    width: 0.75rem;
    height: 0.5rem;
  }
`;
