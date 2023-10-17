import React from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Styles
import * as S from './style';

export default function index() {
    return (
        <>
            <S.Nav>
                <S.List>
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
            </S.Nav>
        </>
    )
}
