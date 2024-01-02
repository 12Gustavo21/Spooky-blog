import styled from "styled-components";

export const BatsWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;

  figure {
    position: absolute;
    width: 100px;
    height: 100px;
    opacity: 0;
    filter: invert(.3);
    z-index: 1;
  }
`;