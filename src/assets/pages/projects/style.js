import styled from "styled-components";

import Cave from "../../gifs/cave.gif";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background: url(${Cave}) no-repeat center/cover;
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
    background-position: -20rem 0;
  }
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
