import React, { useEffect } from 'react';

//Styles
import * as S from './style';

//React icons
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Index({ positionFooter, backgroundFooter }) {

    useEffect(() => {
        AOS.init();
    });

    return (
        <>
            <S.Footer positionFooter={positionFooter} backgroundFooter={backgroundFooter}>
                <S.Container>
                    <S.FooterBoxOne>
                        <S.Icons>
                            <a href='https://github.com/12Gustavo21' target='_blank' rel='noreferrer' title='GitHub'><FaGithub size={30} /></a>
                            <a href='https://www.instagram.com/gualmda' target='_blank' rel='noreferrer' title='Instagram'><FaInstagram size={30} /></a>
                            <a href='https://www.linkedin.com/in/12gustavo21' target='_blank' rel='noreferrer' title='LinkedIn'><BsLinkedin size={30} /></a>
                        </S.Icons>
                    </S.FooterBoxOne>
                </S.Container>
            </S.Footer>
        </>
    )
}
