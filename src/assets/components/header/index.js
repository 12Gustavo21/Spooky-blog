import React, { useEffect, useRef } from 'react';

//React router dom
import { Link } from 'react-router-dom';

//Components
import NavBar from '../navBar';
import Menu from '../menu';
import { useAudio } from '../audioContext';

//Image
import Logo from '../../img/logo.webp';

//Styles
import * as S from './style';

//React icons
import { MdMusicNote, MdMusicOff } from 'react-icons/md';

//Main sound
import ForestSong from '../../sounds/night-forest-soundscape.mp3';

export default function Header({ positionHeader, backgroundHeader }) {
    const { isPlaying, toggleSound } = useAudio();
    const soundRef = useRef(null);

    useEffect(() => {
        soundRef.current = new Audio(ForestSong);
        soundRef.current.loop = true;

        if (isPlaying) {
            soundRef.current.play().catch((error) => {
                console.error('Failed to play audio:', error);
            });
        }

        return () => {
            if (soundRef.current) {
                soundRef.current.pause();
            }
        };
    }, [isPlaying]);

    return (
        <>
            <S.Header positionHeader={positionHeader} backgroundHeader={backgroundHeader}>
                <S.Container>
                    <S.LogoBox>
                        <Link to="/">
                            <img src={Logo} alt='Logo' />
                        </Link>
                    </S.LogoBox>
                    <S.NavBox>
                        <NavBar />
                    </S.NavBox>
                    <S.MenuBox>
                        <Menu />
                    </S.MenuBox>
                    <S.AudioBox>
                        <button onClick={toggleSound} className={isPlaying ? 'active' : ''}>
                            {isPlaying ? <MdMusicOff size={30} /> : <MdMusicNote size={30} />}
                        </button>
                    </S.AudioBox>
                </S.Container>
            </S.Header>
        </>
    )
}
