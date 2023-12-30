import React from "react";

//Styles
import * as S from "./style";

//React Router Dom
import { Link } from "react-router-dom";

const RightNav = ({ open }) => {
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

export default RightNav;
