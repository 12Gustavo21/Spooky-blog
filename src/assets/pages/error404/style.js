import styled, { keyframes } from "styled-components";

const DarkGreen = "#194022";
const Purple = "#8C8AA7";
const Orange = "#FF6000";
const white = "#fff";

const shine = keyframes`
  0% {opacity: .2;}
  25% {opacity: .1;}
  50% {opacity: .2;}
  100% {opacity: .2;}
`;

const upndown = keyframes`
  0% {transform: translateY(5px);}
  50% {transform: translateY(15px);}
  100% {transform: translateY(5px);}
`;

const smallnbig = keyframes`
  0% {width: 90px;}
  50% {width: 100px;}
  100% {width: 90px;}
`;

const blink = keyframes`
  21% {
    transform: scale(1, 1);
  }
  22% {
    transform: scale(1, .1);
  }
  23% {
    transform: scale(1, 1);
  }
  48% {
    transform: scale(1, 1);
  }
  49% {
    transform: scale(1, .1);
  }
  50% {
    transform: scale(1, 1);
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
`;

export const Box = styled.div`
  width: 350px;
  height: 100%;
  max-height: 600px;
  min-height: 450px;
  background: ${DarkGreen};
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 50px;

  .box_ghost {
    padding: 15px 25px 25px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);

    .symbol {
      &:nth-child(1) {
        opacity: 0.2;
        animation: ${shine} 4s ease-in-out 3s infinite;

        &:before,
        &:after {
          content: "";
          width: 12px;
          height: 4px;
          background: ${white};
          position: absolute;
          border-radius: 5px;
          bottom: 65px;
          left: 0;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
      &:nth-child(2) {
        position: absolute;
        left: -5px;
        top: 30px;
        height: 18px;
        width: 18px;
        border: 4px solid;
        border-radius: 50%;
        border-color: $white;
        opacity: 0.2;
        animation: ${shine} 4s ease-in-out 1.3s infinite;
      }
      &:nth-child(3) {
        opacity: 0.2;
        animation: ${shine} 3s ease-in-out 0.5s infinite;

        &:before,
        &:after {
          content: "";
          width: 12px;
          height: 4px;
          background: ${white};
          position: absolute;
          border-radius: 5px;
          top: 5px;
          left: 40px;
        }
        &:before {
          transform: rotate(90deg);
        }
        &:after {
          transform: rotate(180deg);
        }
      }
      &:nth-child(4) {
        opacity: 0.2;
        animation: ${shine} 6s ease-in-out 1.6s infinite;

        &:before,
        &:after {
          content: "";
          width: 15px;
          height: 4px;
          background: ${white};
          position: absolute;
          border-radius: 5px;
          top: 10px;
          right: 30px;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
      &:nth-child(5) {
        position: absolute;
        right: 5px;
        top: 40px;
        height: 12px;
        width: 12px;
        border: 3px solid;
        border-radius: 50%;
        border-color: ${white};
        opacity: 0.2;
        animation: ${shine} 1.7s ease-in-out 7s infinite;
      }
      &:nth-child(6) {
        opacity: 0.2;
        animation: ${shine} 2s ease-in-out 6s infinite;

        &:before,
        &:after {
          content: "";
          width: 15px;
          height: 4px;
          background: ${white};
          position: absolute;
          border-radius: 5px;
          bottom: 65px;
          right: -5px;
        }
        &:before {
          transform: rotate(90deg);
        }
        &:after {
          transform: rotate(180deg);
        }
      }
    }

    .box_ghost-container {
      background: ${white};
      width: 100px;
      height: 100px;
      border-radius: 100px 100px 0 0;
      position: relative;
      margin: 0 auto;
      animation: ${upndown} 3s ease-in-out infinite;

      .box_ghost-eyes {
        position: absolute;
        left: 1.26rem;
        top: 2.3rem;
        height: 12px;
        width: 60px;
        animation: ${blink} 5s infinite linear;

        .left {
          width: 14px;
          height: 14px;
          background: ${DarkGreen};
          border-radius: 50%;
          margin: 0 10px;
          position: absolute;
          left: 0;
        }
        .right {
          width: 14px;
          height: 14px;
          background: ${DarkGreen};
          border-radius: 50%;
          margin: 0 10px;
          position: absolute;
          right: 0;
        }
      }

      .box_ghost-mouth {
        width: 1em;
        height: 0.6em;
        border-radius: 50px;
        border: 0.2em solid ${DarkGreen};
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        position: relative;
        top: 3.5rem;
        left: 2.65rem;
        transform: rotate(180deg);
      }

      .box_ghost-bottom {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;

        div {
          flex-grow: 1;
          position: relative;
          top: -10px;
          height: 20px;
          border-radius: 100%;
          background-color: ${white};

          &:nth-child(2n) {
            top: -12px;
            margin: 0 -0px;
            border-top: 15px solid ${DarkGreen};
            background: transparent;
          }
        }
      }
    }

    .box_ghost-shadow {
      height: 20px;
      box-shadow: 0 50px 15px 5px ${Purple};
      opacity: .3;
      border-radius: 50%;
      margin: 0 auto;
      animation: ${smallnbig} 3s ease-in-out infinite;
    }
  }

  .box_description {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    .box_description-container {
      color: ${white};
      text-align: center;
      width: 200px;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      .box_description-title {
        font: 700 44px/0.5px "Amatic SC", sans-serif;
      }

      .box_description-text {
        color: ${Purple};
        font: 400 16px/20px "Poppins", sans-serif;
      }
    }

    .box_button {
      display: block;
      position: relative;
      background: ${Orange};
      border: 1px solid transparent;
      border-radius: 50px;
      height: 50px;
      text-align: center;
      text-decoration: none;
      color: ${white};
      font: 700 18px/50px "Poppins", sans-serif;
      padding: 0 70px;
      white-space: nowrap;
      margin-top: 25px;
      transition: background 0.5s ease;
      overflow: hidden;
      mask-image: radial-gradient(white, black);

      &:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 100px;
        background: ${white};
        bottom: -25px;
        left: 0;
        border: 2px solid ${white};
        transform: translateX(-50px) rotate(45deg);
        transition: transform 0.5s ease;
      }

      &:hover {
        background: transparent;
        border-color: ${white};

        &:before {
          transform: translateX(250px) rotate(45deg);
        }
      }
    }
  }
`;
