import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: url(${props => props.background}) #091318 no-repeat top/contain;
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 10, 16, 0.7);
    z-index: 1;
  }

  @media only screen and (width <= 768px) {
    background-size: 160vw;
  }
`;

export const ContentWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 10rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
`;

export const ProjectsTitle = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font: 400 4rem/3rem "Amatic SC", sans-serif;
  color: #ff6000;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 10vh;
  font: 400 1.125rem/1.625rem "Poppins", sans-serif;
  color: #ffa559;
`;

export const CardsWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media only screen and (width <= 768px) {
    padding: 0 1rem;
  }
`;