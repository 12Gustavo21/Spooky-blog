import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #070a0a;

    @media only screen and (width <= 900px) {
        flex-direction: column;
        height: 135vh;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 5%;
    bottom: 25%;

    h1 {
        color: #f56f29;
        font: 400 10rem/8rem 'Amatic SC', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-shadow: 
            0 0.0625rem 0 #ff6600,
            0 0.125rem 0 #ff3300,
            0 0.1875rem 0 #ff9933,
            0 0.25rem 0 #ff0000,
            0 0.3125rem 0 #990000,
            0 0.375rem 0.0625rem rgba(0, 0, 0, 0.5),
            0 0 0.3125rem rgba(0, 0, 0, 0.5),
            0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.7),
            0 0.1875rem 0.3125rem rgba(0, 0, 0, 0.5),
            0 0.3125rem 0.625rem rgba(0, 0, 0, 0.6),
            0 0.625rem 0.625rem rgba(0, 0, 0, 0.4),
            0 1.25rem 1.25rem rgba(0, 0, 0, 0.3);
        animation: squiggly-anim 0.34s linear infinite;

        span {
            font-size: 0.5em;
        }

        @keyframes squiggly-anim {
            0% {
                filter: url('#squiggly-0');
            }
            25% {
                filter: url('#squiggly-1');
            }
            50% {
                filter: url('#squiggly-2');
            }
            75% {
                filter: url('#squiggly-3');
            }
            100% {
                filter: url('#squiggly-4');
            }
        }
    }
`;