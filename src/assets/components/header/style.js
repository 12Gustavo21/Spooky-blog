import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transition: all 0.3s ease-in-out;
`;

export const Container = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    @media only screen and (width <= 500px) {
        padding: 0 2rem;
    }
`;

export const LogoBox = styled.figure`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 8rem;
        height: 8rem;
        object-fit: contain;
        transform: scaleX(-1);
        transition: all 0.3s ease-in-out;

        @media only screen and (width <= 1024px) {
            width: 6rem;
            height: 6rem;
        }
    }
`;

export const NavBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (width <= 768px) {
        display: none;
    }
`;

export const MenuBox = styled.div`
    width: 20%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;   
    
    @media only screen and (width <= 768px) {
        display: flex;
    }
`;