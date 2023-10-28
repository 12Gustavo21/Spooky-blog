import styled from 'styled-components';

export const List = styled.ul`
    display: none;
    list-style: none;
    z-index: 2;

    @media (width <= 768px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: column nowrap;
        background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 100%);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        min-height: 100vh;
        width: 18.75rem;
        padding-top: 5rem;
        font: 400 1.25rem/2rem 'DM Sans', sans-serif;
        transition: transform 0.3s ease-in-out;

        a {
            padding-top: .3rem;
            color: #fff;
            font: 400 1.2rem/2rem 'DM Sans', sans-serif;
            text-decoration: none;
            transition: all .2s ease-in-out;
            
            &::after {
                content: "";
                display: block;
                border-bottom: 0.1rem solid #fff;
                transform: scaleX(0);
                transition: transform 250ms ease-in-out;
            }

            &:hover::after {
                transform: scaleX(1);
                transform-origin: center;
            }
        } 
    }
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    color: #fff;
    transition: all .2s ease-in-out;
`;