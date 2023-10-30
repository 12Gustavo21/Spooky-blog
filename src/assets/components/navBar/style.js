import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const List = styled.ul`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    a {
        text-decoration: none;
    }

    @media only screen and (width <= 1440px) {
        width: 100%;
    }
`;

export const Item = styled.li`
    font: bold 1.25rem/2rem "DM Sans", sans-serif;
    color: #666;
    transition: transform 250ms ease-in-out;

    &::after {
        content: "";
        display: block;
        border-bottom: .15rem solid #666;
        transform: scaleX(.05);
        transition: transform 250ms ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: center;
    }

    &:hover {
        transform: translateY(-.25rem);
    }

    @media only screen and (width <= 950px) {
        font-size: 1.1rem;
    }
`;