import React, { useEffect, useState } from "react";

//Style
import * as S from "./style";

const getRandomPosition = (min, max) => Math.random() * (max - min) + min;

const getRandomSpeed = () => (Math.random() - 0.5) * 2;

const GhostCanvas = ({ background }) => {
  const [ghost, setGhost] = useState(Array.from({ length: 5 }, createGhost));

  function createGhost() {
    return {
      x: getRandomPosition(0, window.innerWidth),
      y: getRandomPosition(0, window.innerHeight),
      speedX: getRandomSpeed(),
      speedY: getRandomSpeed(),
    };
  }

  useEffect(() => {
    function updateGhostPositions() {
      setGhost((prevGhost) =>
        prevGhost.map((ghost) => {
          const updateGhost = {
            ...ghost,
            x: ghost.x + ghost.speedX,
            y: ghost.y + ghost.speedY,
          };

          if (
            updateGhost.x < 0 ||
            updateGhost.x > window.innerWidth ||
            updateGhost.y < 0 ||
            updateGhost.y > window.innerHeight
          ) {
            return createGhost();
          }

          return updateGhost;
        })
      );
    }

    const animate = () => {
      updateGhostPositions();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <S.CanvasContainer background={background}>
      {ghost.map((ghost, index) => (
        <S.Ghost
          key={index}
          style={{ top: `${ghost.y}px`, left: `${ghost.x}px` }}
        />
      ))}
    </S.CanvasContainer>
  );
};

export default GhostCanvas;
