import React, { useEffect } from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Components
import NavBar from '../navBar';
import Menu from '../menu';

//Image
import Logo from '../../img/logo.webp';

//Styles
import * as S from './style';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header({ positionHeader }) {

    useEffect(() => {
        AOS.init();
    });

    return (
        <>
            <S.Header positionHeader={positionHeader}>
                <S.Container>
                    <S.LogoBox data-aos="fade-right" data-aos-duration="2000">
                        <Link to="/">
                            <img src={Logo} alt='Logo' />
                        </Link>
                    </S.LogoBox>
                    <S.NavBox data-aos="fade-left" data-aos-duration="2000">
                        <NavBar />
                    </S.NavBox>
                    <S.MenuBox data-aos="fade-left" data-aos-duration="2000">
                        <Menu />
                    </S.MenuBox>
                </S.Container>
            </S.Header>
        </>
    )
}
