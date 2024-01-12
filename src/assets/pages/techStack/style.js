import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #050930;
`;

export const ContentWrapper = styled.section`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const TitleWrapper = styled.section`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font: 400 4rem/3rem 'Amatic SC', sans-serif;
  color: #FF6000;
`;

export const DescriptionWrapper = styled.section`
  width: 100%;
  height: 10vh;
  font: 400 1.125rem/1.625rem 'Poppins', sans-serif;
  color: #FFA559;
`;

export const CanvasWrapper = styled.section`
    width: 100%;    
    min-height: 100vh;
    position: absolute;
    top: 0;
    overflow: hidden;
`;