import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${({ positionFooter }) => positionFooter};
    bottom: 0;
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
    padding: 0 0 2rem 0;
    border-bottom: .1rem solid #66666650;
`;

export const Icons = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    svg {
        fill: #666;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            fill: #f67e2b;
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