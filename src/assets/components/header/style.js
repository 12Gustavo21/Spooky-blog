import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Header = styled.header`
  width: 100%;
  height: ${({ scroll }) => (scroll ? "9vh" : "15vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ scroll }) =>
    scroll ? "rgba( 14, 11, 20, .9 )" : "transparent"};
  box-shadow: ${({ scroll }) =>
    scroll ? "0 8px 32px 0 rgba( 246, 126, 43, 0.37)" : "none"};
  position: fixed;
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;

export const Container = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 500px) {
    padding: 0 2rem;
  }
`;

export const LogoBox = styled.figure`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${({ scroll }) => (scroll ? "5rem" : "7rem")};
    height: ${({ scroll }) => (scroll ? "5rem" : "7rem")};
    object-fit: contain;
    transition: all 0.3s ease-in-out;
    animation: float 3s ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translateY(0) scaleX(-1);
      }
      50% {
        transform: translateY(0.5rem) scaleX(-1);
      }
      100% {
        transform: translateY(0) scaleX(-1);
      }
    }

    @media only screen and (max-width: 1024px) {
      width: ${({ scroll }) => (scroll ? "4.5rem" : "6rem")};
      height: ${({ scroll }) => (scroll ? "4.5rem" : "6rem")};
    }
  }
`;

export const NavBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuBox = styled.div`
  width: 20%;
  height: 100%;
  display: none;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const AudioBox = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .active {
    animation: ${spin} 3s linear infinite;
    transition: all 0.3s ease-in-out;
  }

  button {
    width: 3.5rem;
    height: 3.5rem;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(246, 126, 43, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      transition: all 0.3s ease-in-out;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 50%;
    justify-content: flex-end;

    button {
      width: 3rem;
      height: 3rem;
    }
  }
`;
