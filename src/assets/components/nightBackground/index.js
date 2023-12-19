import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const ShiningStar = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: ${shine} 1s infinite;
`;

const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282a3a;
  overflow: hidden;
  position: relative;
`;

const Canvas = styled.canvas`
  border: 1px solid #fff;
`;

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    function createStars() {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + 1;

        stars.push({ x, y, size });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#282a3a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Desenhe a estrela
        ctx.fillStyle = 'rgb(255, 221, 157)';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Adicione o componente brilhante
        const shineSize = 5;
        const shineX = star.x - shineSize / 2 + star.size / 2;
        const shineY = star.y - shineSize / 2 - star.size / 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(shineX, shineY, shineSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    createStars();
    drawStars();

    // Atualizar o tamanho do canvas quando a janela for redimensionada
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
      drawStars();
    });

    // Remover o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <CanvasContainer>
      <Canvas ref={canvasRef}></Canvas>
    </CanvasContainer>
  );
}

export default App;
