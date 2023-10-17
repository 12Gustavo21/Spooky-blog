import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: ${props => props.showMenu ? '10vh' : '20vh'};
    box-shadow: ${props => props.showMenu ? '0 8px 32px 0 rgba(31, 38, 135, 0.37 )' : 'none'};
    transform: ${props => props.hiddenMenu ? 'translateY(-100%)' : 'translateY(0)'};
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
    justify-content: space-evenly;
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

        @media only screen and (width <= 900px) {
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

    @media only screen and (width <= 900px) {
        width: 60%;
    }

    @media only screen and (width <= 768px) {
        display: none;
    }
`;

export const Icons = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (width <= 900px) {
        width: 20%;
    }

    @media only screen and (width <= 768px) {
        display: none;
    }
`;

export const MenuBox = styled.div`
    width: 60%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (width <= 768px) {
        display: flex;
    }
`;