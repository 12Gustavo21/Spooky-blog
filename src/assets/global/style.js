import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }
`;

export const lightTheme = {
    body: "#FFF",
    fontColor: "#666",
    titlesColor: "#42446E",
    headerIconColor: "#666",
    footerIconColor: "#42446E",
    cardsTitleColor: "#000",
    cardsColor: "#FFF",
    cardsDescriptionColor: "#666",
    cardsLinksColor: "#000",
    cardsShadow: "2px 2px 100px 0px rgba(0, 0, 0, 0.20)",
}

export const darktheme = {
    body: "#191919",
    fontColor: "#A7A7A7",
    titlesColor: "#D9D9D9",
    headerIconColor: "#A7A7A7",
    footerIconColor: "#A7A7A7",
    cardsTitleColor: "#CCC",
    cardsColor: "#363636",
    cardsDescriptionColor: "#CCC",
    cardsLinksColor: "#FFF",
    cardsShadow: "2px 2px 100px 0px rgba(255, 255, 255, 0.20)",
}