import React from 'react';

//Styles
import * as S from './style';

//React Router Dom
import { Link } from 'react-router-dom';

const RightNav = ({ open }) => {
  return (
    <S.List open={open}>
      <Link to="/">
        <S.Item>Home</S.Item>
      </Link>
      <Link to="/about">
        <S.Item>About</S.Item>
      </Link>
      <Link to="/techStack">
        <S.Item>Tech Stack</S.Item>
      </Link>
      <Link to="/projects">
        <S.Item>Projects</S.Item>
      </Link>
      <Link to="/contact">
        <S.Item>Contact</S.Item>
      </Link>
    </S.List>
  );
}

export default RightNav;