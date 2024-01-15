import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const List = styled.ul`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  a {
    text-decoration: none;
    color: #666;

    transition: transform 250ms ease-in-out;

    &::after {
      content: "";
      display: block;
      border-bottom: 0.15rem solid #666;
      transform: scaleX(0.05);
      transition: transform 250ms ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
      border-color: #f56f29;
      transform-origin: center;
    }

    &:hover {
      color: #f56f29;
    }
  }

  @media only screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export const Item = styled.li`
  font: bold 1.25rem/2rem "DM Sans", sans-serif;
  color: #666;
  transition: all 250ms ease-in-out;

  &:hover {
    transform: translateY(-0.25rem);
  }

  @media only screen and (max-width: 950px) {
    font-size: 1.1rem;
  }
`;
