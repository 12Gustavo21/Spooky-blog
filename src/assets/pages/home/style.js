import styled from "styled-components";

/*
    Palette:
    #070a0a
    #f56f29
*/

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: -1;

  h1 {
    color: #f56f29;
    font: 400 8rem/7rem "Amatic SC", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5rem 4rem 0 0;
    animation: squiggly-anim 0.34s linear infinite;

    span {
      font-size: 0.5em;
    }

    @keyframes squiggly-anim {
      0% {
        filter: url("#squiggly-0");
      }
      25% {
        filter: url("#squiggly-1");
      }
      50% {
        filter: url("#squiggly-2");
      }
      75% {
        filter: url("#squiggly-3");
      }
      100% {
        filter: url("#squiggly-4");
      }
    }

    @media only screen and (max-width: 768px) {
      margin: 3rem 3rem 0 0;
    }

    @media only screen and (max-width: 600px) {
      margin: 3rem 0 0 0;
      font-size: 6rem;
    }
  }
`;
