import React, { useEffect, useState } from 'react';

//Style
import * as S from './style';

const getRandomPosition = (min, max) => Math.random() * (max - min) + min;

const getRandomSpeed = () => (Math.random() - 0.5) * 2;

const FireflyCanvas = () => {
  const [fireflies, setFireflies] = useState(Array.from({ length: 40 }, createFirefly));

  function createFirefly() {
    return {
      x: getRandomPosition(0, window.innerWidth),
      y: getRandomPosition(0, window.innerHeight),
      speedX: getRandomSpeed(),
      speedY: getRandomSpeed(),
    };
  }

  function updateFireflyPositions() {
    setFireflies((prevFireflies) =>
      prevFireflies.map((firefly) => {
        const updatedFirefly = {
          ...firefly,
          x: firefly.x + firefly.speedX,
          y: firefly.y + firefly.speedY,
        };

        if (
          updatedFirefly.x < 0 ||
          updatedFirefly.x > window.innerWidth ||
          updatedFirefly.y < 0 ||
          updatedFirefly.y > window.innerHeight
        ) {
          return createFirefly();
        }

        return updatedFirefly;
      })
    );
  }

  useEffect(() => {
    const animate = () => {
      updateFireflyPositions();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <S.CanvasContainer>
      {fireflies.map((firefly, index) => (
        <S.Firefly key={index} style={{ top: `${firefly.y}px`, left: `${firefly.x}px` }} />
      ))}
    </S.CanvasContainer>
  );
};

export default FireflyCanvas;