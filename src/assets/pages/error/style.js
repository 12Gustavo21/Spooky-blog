import styled from "styled-components";

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
      position: absolute;
      bottom: 1.0625rem;
      right: 0.625rem;
      width: 0.625rem;
      height: 0.625rem;
      background: #000;
      border-radius: 50%;
      content: " ";
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
    color: #fff;
    font: 700 5rem 'Amatic SC', sans-serif;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    font: 400 1.5rem/2.5rem 'Poppins', sans-serif;
  }
`;