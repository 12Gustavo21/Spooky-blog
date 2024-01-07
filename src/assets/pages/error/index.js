import React, { useEffect } from "react";

//Style
import * as S from "./style";

export default function Error() {
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
    const numLayers = 5;
    const numEyesPerLayer = 30;
    const maxRadius = 500;

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
          <h1>ERRO 500</h1>
          <p>
            Sorry, something went wrong. <span>We are working on it.</span> Ok? :)
          </p>
        </S.ContentWrapper>
      </S.Main>
    </>
  );
}
