import styled, { keyframes } from "styled-components";

const ani = keyframes`
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
`;

const ani2 = keyframes`
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0f1927;
  position: fixed;
  z-index: 2;
`;

export const EyesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 2rem 4rem 0 0;
  position: relative;

  .container {
    width: 6.25rem;
    height: 6.25rem;
    position: absolute;

    .eye {
      position: relative;
      display: inline-block;
      border-radius: 50%;
      height: 1.875rem;
      width: 1.875rem;
      background: #ccc;
    }
    .eye:after {
      content: "";
      position: absolute;
      bottom: 1.0625rem;
      right: 0.625rem;
      width: 0.625rem;
      height: 0.625rem;
      background: #0f1927;
      border-radius: 50%;
    }
  }
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2rem;
  top: -35rem;

  h1 {
    color: #ccc;
    font: 700 5rem "Amatic SC", sans-serif;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ccc;
    text-align: center;
    font: 400 1.5rem/2.5rem "Poppins", sans-serif;
  }

  @media only screen and (max-width: 768px) {
    top: -32rem;
  }

  @media only screen and (max-width: 375px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 1px;
  border-radius: 8px;

  button {
    width: 9rem;
    height: 3rem;
    font: 900 1rem/2.5rem "Poppins", sans-serif;
    letter-spacing: 1px;
    background: #ccc;
    -webkit-mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
    mask: url("https://raw.githubusercontent.com/pizza3/asset/master/natureSmaller.png");
    -webkit-mask-size: 7100% 100%;
    mask-size: 7100% 100%;
    border: none;
    color: #0f1927;
    cursor: pointer;
    -webkit-animation: ${ani2} 0.7s steps(70) forwards;
    animation: ${ani2} 0.7s steps(70) forwards;

    &:hover {
      -webkit-animation: ${ani} 0.7s steps(70) forwards;
      animation: ${ani} 0.7s steps(70) forwards;
    }
  }

  span {
    width: 100%;
    font: 900 1rem/3rem "Poppins", sans-serif;
    letter-spacing: 1px;
    position: absolute;
    color: #ccc;
    text-align: center;
    overflow: hidden;
  }
`;
