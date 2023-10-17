import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::selection {
        background: #E70FAA;
        color: #fff;
    }

    html {
        scroll-behavior: smooth;
    }
`;