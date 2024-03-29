import React, { useState } from "react";

//Styles
import styled from "styled-components";

//Components
import LeftNav from "../leftNav";

const StyledBurger = styled.section`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  padding: 0 0rem 0.5rem 1rem;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: ${({ open }) => (open ? ".5rem" : ".3rem")};
    flex-flow: column nowrap;
  }

  section {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#666")};
    border-radius: 0.625rem;
    transform-origin: 0.0625rem;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <section />
        <section />
        <section />
      </StyledBurger>
      <LeftNav open={open} onClose={closeMenu} />
    </>
  );
};

export default Burger;
