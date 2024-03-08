import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    ::selection {
        background: #f67e2b;
        color: #fff;
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
    }
`;
