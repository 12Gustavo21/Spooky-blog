import styled, { keyframes } from "styled-components";

const speak = keyframes`
  0% {
    height: 5px;
  }
  50% {
    height: 15px;
    left: 52%;
  }
  100% {
    height: 5px;
  }
`;

export const FriendMessage = styled.section`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  width: 8vw;
  height: 8vh;
  background-color: #f5f5f5;
  border-radius: 10px;
  position: fixed;
  z-index: 9;
  top: 60%;
  left: 91%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  transition: 1s display ease;

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #f5f5f5;
    position: absolute;
    bottom: -5px;
    left: 80%;
    z-index: 1;
    transform: translateX(-50%) rotate(45deg);
  }
`;

export const FriendMessageText = styled.p`
  font: 500 12px/1rem "Poppins", sans-serif;
  color: #333;
  padding: 5px;
  text-align: center;
  transition: 1s all ease;
  z-index: 2;
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
`;

export const Friend = styled.div`
  width: ${(props) => (props.clicked ? "100px" : "110px")};
  height: 80px;
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 50px 0 0 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  transition: 1s all ease;
`;

export const FriendEyeWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FriendEyes = styled.div`
  width: 15px;
  height: 15px;
  background-color: #333;
  border-radius: 50%;
  position: absolute;
  transition: 1s all ease;

  &:first-child {
    bottom: ${(props) => (props.clicked ? "25px" : "30px")};
    left: ${(props) => (props.clicked ? "20px" : "0")};
  }

  &:last-child {
    top: 25px;
  }
`;

export const FriendMouth = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  position: absolute;
  left: 51%;
  top: 50px;
  border: 2px solid #333;
  background-color: #333;
  width: 15px;
  height: 10px;
  border-radius: 0 0 10px 10px;
  animation: ${speak} 2s infinite;
  transform: rotate(-45deg);
  transition: 1s all ease;
`;
