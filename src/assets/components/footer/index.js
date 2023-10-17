import React from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Image
import Logo from '../../img/logo.png';

//Styles
import * as S from './style';

//React icons
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

export default function index() {
    return (
        <>
            <S.Footer>
                <S.Container>
                    <S.FooterBoxOne>
                        <S.LogoBox>
                            <Link to="/">
                                <img src={Logo} alt='Logo' width={"100rem"} />
                            </Link>
                        </S.LogoBox>
                        <S.Icons>
                            <FaGithub size={30} />
                            <FaInstagram size={30} />
                            <BsLinkedin size={30} />
                        </S.Icons>
                    </S.FooterBoxOne>
                    <S.FooterBoxTwo>
                        <S.ListBox>
                            <S.List>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                                <Link to="/about">
                                    <li>About</li>
                                </Link>
                                <Link to="/techStack">
                                    <li>Tech Stack</li>
                                </Link>
                                <Link to="/projects">
                                    <li>Projects</li>
                                </Link>
                                <Link to="/contact">
                                    <li>Contact</li>
                                </Link>
                            </S.List>
                        </S.ListBox>
                    </S.FooterBoxTwo>
                </S.Container>
            </S.Footer>
        </>
    )
}
