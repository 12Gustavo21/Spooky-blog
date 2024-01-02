import React, { useEffect } from "react";

// Gif
import batGif from "../../gifs/bat.gif";

//Styles
import * as S from "./style";

const HalloweenBats = ({ numberOfBats }) => {
  useEffect(() => {
    const random = Math.random();
    const documentRef = document;
    const bats = documentRef.getElementById("bats");
    const windowRef = window;

    const createBat = () => {
      const image = documentRef.createElement("img");
      image.alt = "Bat animation";
      image.draggable = false;
      const container = documentRef.createElement("figure");
      const containerStyle = container.style;

      container.appendChild(image);
      image.src = batGif;

      bats.appendChild(container);

      let posX = windowRef.innerWidth * random;
      let posY = windowRef.innerHeight * random;
      let opacity = 0;

      function calculatePosition(oldPos, max) {
        return Math.max(
          Math.min(oldPos + (Math.random() - 0.5) * 400, max - 50),
          50
        );
      }

      function animate() {
        const newX = calculatePosition(posX, windowRef.innerWidth);
        const newY = calculatePosition(posY, windowRef.innerHeight);
        const distance =
          5 *
          Math.sqrt(
            (posX - newX) * (posX - newX) + (posY - newY) * (posY - newY)
          );

        containerStyle.opacity = opacity;
        opacity = 1;

        containerStyle.transition = containerStyle.transition =
          distance / 1000 + "s linear";
        containerStyle.transform = containerStyle.transform =
          "translate(" + newX + "px," + newY + "px)";
        image.style.transform = image.style.transform =
          posX > newX ? "" : "scaleX(-1)";

        posX = newX;
        posY = newY;

        setTimeout(animate, distance);
      }

      setTimeout(animate, random * 3000);

      return () => {
        bats.removeChild(container);
      };
    };

    for (let i = 0; i < numberOfBats; i++) {
      createBat();
    }
  }, [numberOfBats]);

  return <S.BatsWrapper id="bats"></S.BatsWrapper>;
};

export default HalloweenBats;
