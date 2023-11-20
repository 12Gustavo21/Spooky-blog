import styled, { keyframes } from 'styled-components';

export const CanvasContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

export const fadeInOut = keyframes`
    0%, 100% {
        opacity: 0.3;
    }
    50% {
        opacity: 1;
    }
`;

export const Firefly = styled.div`
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #f8e71c;
    border-radius: 50%;
    animation: ${fadeInOut} 2s infinite;
`;