import styled from "styled-components";

import Cave from "../../gifs/cave.gif";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #0b1418;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: url(${Cave}) no-repeat center center/contain;
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 10, 16, 0.7);
    z-index: 1;
  }
`;
