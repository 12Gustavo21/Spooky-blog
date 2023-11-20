import styled from 'styled-components';

export const List = styled.ul`
    display: none;
    list-style: none;
    z-index: 9;

    @media (width <= 768px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-flow: column nowrap;
        background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 100%);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        inset: 0;
        min-height: 100vh;
        width: 18.75rem;
        padding-top: 1rem;
        font: 400 1.25rem/2rem 'DM Sans', sans-serif;
        transition: transform 0.3s ease-in-out;

        a {
            padding-top: .3rem;
            text-decoration: none;
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
                border-color: #f56f29;
                transform-origin: center;
            }

            &:hover {
                color: #f56f29;
                transform: translateY(-.25rem);
            }
        } 
    }
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    transition: all .2s ease-in-out;
`;