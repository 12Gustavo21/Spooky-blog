import React, { useEffect } from "react";

//Style
import * as S from "./style";

//React router dom
import { Link } from "react-router-dom";

export default function Error({ error, backToHome }) {
  useEffect(() => {
    const main = document.querySelector("main");
    main.addEventListener("mousemove", function (e) {
      var eye = document.querySelectorAll(".eye");
      eye.forEach(function (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let rad = Math.atan2(e.pageX - x, e.pageY - y);
        let rot = rad * (180 / Math.PI) * -1 + 180;
        eye.style.transform = "rotate(" + rot + "deg)";
      });
    });
  }, []);

  const renderEyes = () => {
    const windowWidth = window.innerWidth;

    const numLayers = 5;
    const numEyesPerLayer = windowWidth < 768 ? 20 : 30;
    const maxRadius = windowWidth < 768 ? 400 : 500;

    const layerMultipliers = [6, 7, 3, 4, 5, 1, 3, 8, 7];

    const layers = Array.from({ length: numLayers }, (_, layerIndex) => {
      const layerRadius =
        (maxRadius / numLayers) * layerMultipliers[layerIndex];

      return Array.from({ length: numEyesPerLayer }, (_, eyeIndex) => {
        const angle = (eyeIndex * 2 * Math.PI) / numEyesPerLayer;

        const eyeStyle = {
          top: `calc(50% - ${Math.sin(angle) * layerRadius}px)`,
          left: `calc(50% + ${Math.cos(angle) * layerRadius}px)`,
        };

        return (
          <div
            className="container"
            key={`${layerIndex}-${eyeIndex}`}
            style={eyeStyle}
          >
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        );
      });
    });

    return layers.flat();
  };

  return (
    <>
      <S.Main>
        <S.EyesWrapper>{renderEyes()}</S.EyesWrapper>
        <S.ContentWrapper>
          <h1>ERROR {error}</h1>
          {error === 404 ? (
            <p>
              It seems like we couldn't find
              <span> the page you were looking for</span>
            </p>
          ) : (
            <p>
              Sorry, something went wrong. <span>We are working on it.</span>
              Ok? :)
            </p>
          )}
          {backToHome ? (
            <S.ButtonWrapper>
              <Link to="/">
                <span>Go back</span>
                <button>Go back</button>
              </Link>
            </S.ButtonWrapper>
          ) : null}
        </S.ContentWrapper>
      </S.Main>
    </>
  );
}
