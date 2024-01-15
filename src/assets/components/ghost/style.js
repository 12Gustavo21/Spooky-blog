import styled, { keyframes } from "styled-components";

const skirt = keyframes`
  0% {
    left: -1.3125rem;
  }
  100% {
    left: 0;
  }
`;

const blink = keyframes`
  21% {
    transform: scale(1, 1);
  }
  22% {
    transform: scale(1, .1);
  }
  23% {
    transform: scale(1, 1);
  }
  48% {
    transform: scale(1, 1);
  }
  49% {
    transform: scale(1, .1);
  }
  50% {
    transform: scale(1, 1);
  }
`;

const turn = keyframes`
  0% {
    transform: rotate(-3deg) skew(0);
  }
  50% {
    transform: rotate(-.5deg) skew(2deg);
  }
  100% {
    transform: rotate(-3deg) skew(0);
  }
`;

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.background}) no-repeat top/cover;
  image-rendering: pixelated;
  position: relative;
  z-index: 0;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(1, 1, 1, 0.6);
    z-index: 1;
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% 0;
  }
`;

export const Ghost = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 3.125rem;
  border-top-left-radius: 624.9375rem;
  border-top-right-radius: 624.9375rem;
  background-color: #fff;
  clip: rect(0, 2.5rem, 3.75rem, 0);
  transform: rotate(-1.25deg);
  animation: ${turn} 8s infinite;
  opacity: 0.95;

  &::after {
    content: "";
    position: absolute;
    width: 0.4688rem;
    height: 0.625rem;
    left: 0.625rem;
    top: 1.4063rem;
    border-radius: 624.9375rem;
    background-color: #222;
    box-shadow: -0.0469rem 0 0 rgba(0, 0, 0, 0.5), 0.7031rem 0 0 #222,
      0.6563rem 0 0 rgba(0, 0, 0, 0.5);
    animation: ${blink} 3s infinite linear;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.3125rem;
    width: 0.625rem;
    height: 0.625rem;
    background-color: #fff;
    border-radius: 624.9375rem;
    box-shadow: 0.625rem 0 0 #2e3237, 1.25rem 0 0 #fff, 1.875rem 0 0 #2e3237,
      2.5rem 0 0 #fff, 3.125rem 0 0 #2e3237;
    animation: ${skirt} 300ms infinite linear;
  }
`;
