import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const LeftNav = ({ open, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      handleLinkClick();
    });
  });

  return (
    <S.List open={open}>
      <S.Item>
        <Link to="/">Home</Link>
      </S.Item>
      <S.Item>
        <Link to="/about">About</Link>
      </S.Item>
      <S.Item>
        <Link to="/techStack">Tech Stack</Link>
      </S.Item>
      <S.Item>
        <Link to="/projects">Projects</Link>
      </S.Item>
      <S.Item>
        <Link to="/contact">Contact</Link>
      </S.Item>
    </S.List>
  );
};

export default LeftNav;
