import styled from "styled-components";

//Assets
import darkForest from '../../img/dark-forest.png';

export const Canvas = styled.canvas`
    width: 100%;
    height: 100vh;
    background: url(${darkForest}) no-repeat center/cover fixed;
`;