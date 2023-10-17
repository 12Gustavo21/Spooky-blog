import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    
    @media only screen and (width <= 500px) {
        padding: 0 1rem;
    }
`;

export const FooterBoxOne = styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 5rem 0;
    border-bottom: .1rem solid #66666650;
`;

export const LogoBox = styled.figure`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 8rem;
        height: 8rem;
        object-fit: contain;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
            filter: brightness(0.5);
        }

        @media only screen and (width <= 1024px) {
            width: 6rem;
            height: 6rem;
        }
    }
`;

export const Icons = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    svg {
        fill: #666;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            fill: #42446E;
            transform: scale(1.2);
        }
    }

        @media only screen and (width <= 1024px) {
            width: 30%;
        }

        @media only screen and (width <= 950px) {
            width: 40%;
        }

        @media only screen and (width <= 768px) {
            width: 50%;
        }
`;

export const FooterBoxTwo = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5rem 0;

    @media only screen and (width <= 500px) {
        padding: 2rem 0;
    }
`;

export const ListBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const List = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    list-style: none;

    @media only screen and (width <= 768px) {
        justify-content: space-between;
    }

    @media only screen and (width <= 500px) {
        flex-direction: column;
        gap: 1rem;
    }

    a {
        text-decoration: none;
    }

    li {
        font: bold 1.25rem/2rem "DM Sans", sans-serif;
        color: #666;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &::after {
            content: "";
            display: block;
            border-bottom: .15rem solid #666;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: center;
        }

        @media only screen and (width <= 768px) {
            font-size: 1.1rem;
        }

        @media only screen and (width <= 500px) {
            font-size: 1rem;
        }
    }
`;