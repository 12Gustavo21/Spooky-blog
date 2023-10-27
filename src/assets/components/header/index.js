import React from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Components
import NavBar from '../navBar';
import Menu from '../menu';

//Image
import Logo from '../../img/logo.webp';

//Styles
import * as S from './style';

export default function Header({positionHeader}) {

    return (
        <>
            <S.Header positionHeader={positionHeader}>
                <S.Container>
                    <S.LogoBox>
                        <Link to="/">
                            <img src={Logo} alt='Logo' width={"100rem"} />
                        </Link>
                    </S.LogoBox>
                    <S.NavBox>
                        <NavBar />
                    </S.NavBox>
                    <S.MenuBox>
                        <Menu />
                    </S.MenuBox>
                </S.Container>
            </S.Header>
        </>
    )
}
