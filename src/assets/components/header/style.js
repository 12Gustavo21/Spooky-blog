import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: ${({ scroll }) => (scroll ? '10vh' : '20vh')};
    box-shadow: ${({ scroll }) => (scroll ? '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' : 'none')};
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
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

    @media only screen and (width <= 950px) {
        width: 20%;
    }

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

export const ToggleBox = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        color: #666;
    }

    @media only screen and (width <= 768px) {
        width: 40%;
        justify-content: flex-end; 
    }
`;