import React from "react";

//React router dom
import { Link } from "react-router-dom";

//Styles
import * as S from "./style";

export default function index() {
    return (
        <>
        <S.Nav>
            <S.List>
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
        </S.Nav>
        </>
    );
}
