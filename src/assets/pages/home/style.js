import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 120vh;
    background-color: ${({ theme }) => theme.body};
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (width <= 900px) {
        flex-direction: column;
        height: 135vh;
    }
`;

export const ContentWrapper = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;

    span {
        color: #42446E;
        font: 700 2.625rem/4rem Poppins, sans-serif;

        &.gradient {
            background: linear-gradient(to left, #E70FAA, #13B0F5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        @media only screen and (width <= 425px) {
            font-size: 2rem;
        }
    }

    @media only screen and (width <= 900px) {
        width: 100%;
        height: 45%;
        justify-content: flex-end;
    }

    @media only screen and (width <= 425px) {
        padding-left: 1rem;
    }
`;

export const Border = styled.div`
    width: 22.8rem;
    height: 22.8rem;
    border-radius: 50%;
    background: linear-gradient(to bottom, #E70FAA, #00C0FD);
    display: grid;
    place-items: center;

    @media only screen and (width <= 600px) {
        width: 18.8rem;
        height: 18.8rem;
    }
`;

export const ProfilePhotoWrapper = styled.figure`
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 21.8125rem;
        height: 21.8125rem;
        border-radius: 50%;
        filter: grayscale(100%);
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        user-select: none;

        &:hover {
            transform: scale(.95);
            filter: grayscale(0%);
        }

        @media only screen and (width <= 600px) {
            width: 17.8125rem;
            height: 17.8125rem;
        }
    }

    @media only screen and (width <= 900px) {
        width: 100%;
        height: 50%;
        align-items: flex-start;
        padding-top: 4rem;
    }

    @media only screen and (width <= 600px) {
        padding-top: 2rem;
    }
`;