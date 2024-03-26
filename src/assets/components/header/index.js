import React, { useEffect, useRef, useState } from 'react';

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
import ForestSong from '../../sounds/dramatic-soundscape.mp3';

export default function Header() {
    const { isPlaying, toggleSound } = useAudio();
    const soundRef = useRef(null);

    const [scroll, setScroll] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

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

    useEffect(() => {
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

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <S.Header scroll={scroll}>
                <S.Container>
                    <S.LogoBox scroll={scroll}>
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
                        <button onClick={toggleSound} className={isPlaying ? 'active' : ''} title='Toggle sound'>
                            {isPlaying ? <MdMusicOff size={30} /> : <MdMusicNote size={30} />}
                        </button>
                    </S.AudioBox>
                </S.Container>
            </S.Header>
        </>
    )
}
