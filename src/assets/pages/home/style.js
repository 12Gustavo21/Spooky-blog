import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (width <= 900px) {
        flex-direction: column;
        height: 135vh;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h1 {
        color: #f56f29;
        font: 400 5rem/6rem Nosifer, sans-serif;
        position: absolute;
        left: 5%;
        display: flex;
        flex-direction: column;
        text-shadow: 
            0 1px 0 #ff6600, /* Laranja */
            0 2px 0 #ff3300, /* Vermelho */
            0 3px 0 #ff9933, /* Laranja claro */
            0 4px 0 #ff0000, /* Vermelho brilhante */
            0 5px 0 #990000, /* Vermelho escuro */
            0 6px 1px rgba(0, 0, 0, 0.5),
            0 0 5px rgba(0, 0, 0, 0.5),
            0 1px 3px rgba(0, 0, 0, 0.7),
            0 3px 5px rgba(0, 0, 0, 0.5),
            0 5px 10px rgba(0, 0, 0, 0.6),
            0 10px 10px rgba(0, 0, 0, 0.4),
            0 20px 20px rgba(0, 0, 0, 0.3);

        span {
            position: relative;
            left: 1rem;
        }
    }
`;