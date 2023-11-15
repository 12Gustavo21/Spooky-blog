import styled, { keyframes } from "styled-components";

const wind = keyframes`
    50% {
        transform: rotate(10deg);
    }
`;

const windys = keyframes`
    25% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(10deg);
    }
`;

export const contentWrapper = styled.section`
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(to bottom, #072770 1%, #130F26 100%);
`;

export const foreground = styled.div`
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0px;
    pointer-events: none;
    z-index: 2;
`;

export const trees3 = styled.ul`
    position: absolute;
    bottom: -140px;
    margin: 0px;
    padding: 0px;
    width: 100%;
    text-align: center;
    filter: blur(2px);
    left: 250px;

    li {
        width: 0px;
        display: block;
        height: 0px;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 400px solid #1B3232;
        border-top: 0px solid transparent;
        position: absolute;
        bottom: -50px;
        animation: ${wind} 10s ease-in-out infinite;
        animation-delay: 1.5s;
    }

    li:nth-child(1) { left: -82px; bottom: 10px; }
    li:nth-child(2) { left: -19px; bottom: -23px; }
    li:nth-child(3) { left: 66px; bottom: -60px; }
    li:nth-child(4) { left: 90px; bottom: -100px; }
    li:nth-child(5) { left: 120px; bottom: -90px; }
    li:nth-child(6) { left: 153px; bottom: -110px; }
    li:nth-child(7) { left: 191px; bottom: -139px; }
    li:nth-child(8) { left: 253px; bottom: -180px; }
    li:nth-child(9) { right: 370px; bottom: 70px; }
    li:nth-child(10) { right: 420px; bottom: 50px; }
    li:nth-child(11) { right: 504px; bottom: -20px; }
    li:nth-child(12) { right: 550px; bottom: -50px; }
    li:nth-child(13) { right: 627px; bottom: -100px; }
    li:nth-child(14) { right: 670px; bottom: -91px; }
    li:nth-child(15) { right: 696px; bottom: -132px; }
    li:nth-child(16) { right: 730px; bottom: -150px; }

    @media screen and (min-height: 0px) and (max-height: 600px) {
        bottom: -300px;
    }
`;

export const trees2 = styled.ul`
    position: absolute;
    bottom: 0px;
    margin: 0px;
    padding: 0px;
    width: 100%;
    text-align: center;
    filter: blur(3px);

    li {
        width: 0px;
        display: block;
        height: 0px;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 400px solid #194022;
        border-top: 0px solid transparent;
        position: absolute;
        bottom: -50px;
        animation: ${wind} 10s ease-in-out infinite;
    }

    li:nth-child(1) { left: -82px; bottom: 10px; }
    li:nth-child(2) { left: -10px; }
    li:nth-child(3) { left: 40px; bottom: -80px; }
    li:nth-child(4) { left: 90px; bottom: -100px; }
    li:nth-child(5) { left: 120px; bottom: -50px; }
    li:nth-child(6) { left: 190px; bottom: -120px; }
    li:nth-child(7) { left: 270px; bottom: -150px; }
    li:nth-child(8) { left: 320px; bottom: -180px; }
    li:nth-child(9) { right: -80px; }
    li:nth-child(10) { right: -20px; bottom: 40px; }
    li:nth-child(11) { right: 44px; bottom: -20px; }
    li:nth-child(12) { right: 100px; bottom: -40px; }
    li:nth-child(13) { right: 191px; bottom: -110px; }
    li:nth-child(14) { right: 220px; bottom: -120px; }
    li:nth-child(15) { right: 270px; bottom: -180px; }
    li:nth-child(16) { right: 340px; bottom: -210px; }

    @media screen and (min-height: 0px) and (max-height: 600px) {
        bottom: -170px;
    }
`;

export const trees1 = styled.ul`
    position: absolute;
    bottom: -140px;
    margin: 0px;
    padding: 0px;
    width: 100%;
    text-align: center;
    filter: blur(8px);

    li {
        width: 0px;
        display: block;
        height: 0px;
        border-left: 100px solid transparent;
        border-right: 100px solid transparent;
        border-bottom: 400px solid #20321b;
        border-top: 0px solid transparent;
        position: absolute;
        bottom: -50px;
        animation: ${windys} 20s ease-in-out infinite;
        animation-delay: 3.5s;
    }

    li:nth-child(1) { left: -82px; bottom: 10px; }
    li:nth-child(2) { left: -10px; }
    li:nth-child(3) { left: 40px; bottom: -80px; }
    li:nth-child(4) { left: 90px; bottom: -100px; }
    li:nth-child(5) { left: 120px; bottom: -50px; }
    li:nth-child(6) { left: 190px; bottom: -120px; }
    li:nth-child(7) { left: 270px; bottom: -150px; }
    li:nth-child(8) { left: 320px; bottom: -180px; }
    li:nth-child(9) { right: -80px; }
    li:nth-child(10) { right: 0px; bottom: 30px; }
    li:nth-child(11) { right: 94px; bottom: -100px; }
    li:nth-child(12) { right: 150px; bottom: -50px; }
    li:nth-child(13) { right: 211px; bottom: -190px; }
    li:nth-child(14) { right: 240px; bottom: -150px; }
    li:nth-child(15) { right: 302px; bottom: -240px; }
    li:nth-child(16) { right: 340px; bottom: -210px; }

    @media screen and (min-height: 0px) and (max-height: 600px) {
        bottom: -270px;
    }
`;

export const background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`;

const glow = keyframes`
    0% {
        box-shadow: 0px 0px 0px rgba(245, 111, 41, 0.5);
    }
    50% {
        box-shadow: 0px 0px 20px rgba(245, 111, 41, 1);
    }
    100% {
        box-shadow: 0px 0px 0px rgba(245, 111, 41, 0.5);
    }
`;

export const stars = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background: transparent;

    li {
        background: rgba(245, 111, 41, 0.5);
        list-style-type: none;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        display: block;
        position: absolute;
    }

    li.small { width: 5px; height: 5px; animation: ${glow} 8s linear infinite; }
    li:nth-child(1) { top: 46%; left: 5%; animation: ${glow} 3s linear infinite; }
    li:nth-child(2) { top: 51%; left: 9%; animation: ${glow} 4s linear infinite; }
    li:nth-child(3) { top: 68%; left: 10%; animation: ${glow} 5s linear infinite; }
    li:nth-child(4) { left: 17.4%; bottom: 31%; animation: ${glow} 6s linear infinite; }
    li:nth-child(5) { left: 18.3%; top: 68%; animation: ${glow} 7s linear infinite; }
    li:nth-child(6) { left: 21%; bottom: 38%; animation: ${glow} 8s linear infinite; }
    li:nth-child(7) { left: 23%; top: 62%; animation: ${glow} 9s linear infinite; }
    li:nth-child(8) { left: 25%; top: 63%; animation: ${glow} 10s linear infinite; }
    li:nth-child(9) { left: 27%; top: 17%; animation: ${glow} 11s linear infinite; }
    li:nth-child(10) { left: 33%; top: 17%; animation: ${glow} 12s linear infinite; }
    li:nth-child(11) { top: 45%; left: 29%; animation: ${glow} 13s linear infinite; }
    li:nth-child(12) { left: 34%; top: 50%; animation: ${glow} 14s linear infinite; }
    li:nth-child(13) { left: 35.4%; top: 50.3%; animation: ${glow} 15s linear infinite; }
    li:nth-child(14) { left: 34.8%; top: 51%; animation: ${glow} 16s linear infinite; }
    li:nth-child(15) { top: 58%; left: 33.5%; animation: ${glow} 17s linear infinite; }
    li:nth-child(16) { left: 23.6%; bottom: 20%; animation: ${glow} 18s linear infinite; }
    li:nth-child(17) { left: 32%; top: 17.5%; animation: ${glow} 19s linear infinite; }
    li:nth-child(18) { left: 42%; top: 6%; animation: ${glow} 20s linear infinite; }
    li:nth-child(19) { left: 42%; top: 18%; animation: ${glow} 3s linear infinite; }
    li:nth-child(20) { left: 43.2%; top: 21%; animation: ${glow} 4s linear infinite; }
    li:nth-child(21) { left: 45.5%; top: 25%; animation: ${glow} 5s linear infinite; }
    li:nth-child(22) { left: 45%; bottom: 29%; animation: ${glow} 6s linear infinite; }
    li:nth-child(23) { right: 46%; bottom: 33.2%; animation: ${glow} 7s linear infinite; }
    li:nth-child(24) { right: 45.2%; bottom: 29.7%; animation: ${glow} 8s linear infinite; }
    li:nth-child(25) { bottom: 26%; left: 55.4%; animation: ${glow} 9s linear infinite; }
    li:nth-child(26) { bottom: 29.7%; left: 56.7%; animation: ${glow} 10s linear infinite; }
    li:nth-child(27) { bottom: 33.7%; left: 57.4%; animation: ${glow} 11s linear infinite; }
    li:nth-child(28) { left: 57%; top: 24%; animation: ${glow} 12s linear infinite; }
    li:nth-child(29) { left: 62.5%; top: 12%; animation: ${glow} 13s linear infinite; }
    li:nth-child(30) { left: 72%; top: 4%; animation: ${glow} 14s linear infinite; }
    li:nth-child(31) { left: 79%; top: 16.5%; animation: ${glow} 15s linear infinite; }
    li:nth-child(32) { left: 85%; top: 48%; animation: ${glow} 16s linear infinite; }
    li:nth-child(33) { left: 42.4%; top: 9%; animation: ${glow} 17s linear infinite; }
    li:nth-child(34) { left: 67%; top: 39%; animation: ${glow} 18s linear infinite; }
    li:nth-child(35) { left: 74.5%; top: 25.5%; animation: ${glow} 19s linear infinite; }
    li:nth-child(36) { left: 74.8%; top: 27.4%; animation: ${glow} 20s linear infinite; }
    li:nth-child(37) { left: 78%; top: 24%; animation: ${glow} 3s linear infinite; }
    li:nth-child(38) { left: 91.5%; top: 30.5%; animation: ${glow} 4s linear infinite; }
    li:nth-child(39) { left: 95.5%; top: 29.5%; animation: ${glow} 5s linear infinite; }
    li:nth-child(40) { left: 91.8%; top: 33.5%; animation: ${glow} 6s linear infinite; }
    li:nth-child(41) { left: 96.8%; top: 39.8%; animation: ${glow} 7s linear infinite; }
    li:nth-child(42) { left: 98.5%; top: 41.2%; animation: ${glow} 8s linear infinite; }
    li:nth-child(43) { left: 90.5%; top: 47.5%; animation: ${glow} 9s linear infinite; }
    li:nth-child(44) { left: 80%; top: 54%; animation: ${glow} 10s linear infinite; }
    li:nth-child(45) { left: 97%; top: 61%; animation: ${glow} 11s linear infinite; }
    li:nth-child(46) { left: 77%; top: 61%; animation: ${glow} 12s linear infinite; }
    li:nth-child(47) { left: 79.5%; top: 63.5%; animation: ${glow} 13s linear infinite; }
    li:nth-child(48) { left: 71%; top: 73%; animation: ${glow} 14s linear infinite; }
`;