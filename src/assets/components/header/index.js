import React, { useEffect, useState } from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Components
import NavBar from '../navBar';
import { Theme } from '../theme';
import Menu from '../menu';

//Image
import Logo from '../../img/logo.png';

//React icons
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

//Theme toggle
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

//Styles
import * as S from './style';

export default function Header() {

    const [theme, toggleTheme] = Theme();
    console.log(theme);

    const [scroll, setScroll] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const currentPosition = window.scrollY;

        setScrollPosition(currentPosition);

        if (currentPosition > 0) {
            if (scrollPosition > currentPosition) {
                setScroll('up');
            } else {
                setScroll('down');
            }
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <S.Header showMenu={scroll === 'up'}
                hiddenMenu={scroll === 'down'}>
                <S.Container>
                    <S.LogoBox>
                        <Link to="/">
                            <img src={Logo} alt='Logo' width={"100rem"} />
                        </Link>
                    </S.LogoBox>
                    <S.NavBox>
                        <NavBar />
                    </S.NavBox>
                    <S.Icons>
                        <FaGithub size={30} />
                        <FaInstagram size={30} />
                        <BsLinkedin size={30} />
                    </S.Icons>
                    <S.MenuBox>
                        <Menu />
                    </S.MenuBox>
                    <div>
                        <Classic duration={750} style={{ fontSize: 40 }} theme={theme} onToggle={toggleTheme} />
                    </div>
                </S.Container>
            </S.Header>
        </>
    )
}
