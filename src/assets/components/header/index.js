import React, { useEffect, useState } from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Components
import NavBar from '../navBar';
import Menu from '../menu';
import Switch from '../switch';

//Image
import Logo from '../../img/logo.png';

//React icons
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

//Styles
import * as S from './style';

export default function Header() {
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
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <S.Header scroll={scroll}>
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
                    <S.ToggleBox>
                        <Switch />
                    </S.ToggleBox>
                    <S.MenuBox>
                        <Menu />
                    </S.MenuBox>
                </S.Container>
            </S.Header>
        </>
    )
}
