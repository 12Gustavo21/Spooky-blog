import React from 'react';

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
                        <S.Icons>
                            <FaGithub size={30} />
                            <FaInstagram size={30} />
                            <BsLinkedin size={30} />
                        </S.Icons>
                    </S.FooterBoxOne>
                </S.Container>
            </S.Footer>
        </>
    )
}
