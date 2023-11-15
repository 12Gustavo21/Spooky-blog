import React, { useRef, useEffect, useState } from "react";

// Styles
import * as S from "./style";

function FireflyCanvas() {
  const canvasRef = useRef(null);
  const [c, setC] = useState(null);
  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight);
  const [f, setF] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setC(ctx);

    canvas.width = w;
    canvas.height = h;

    function createFirefly() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        s: Math.random() * 2,
        ang: Math.random() * 2 * Math.PI,
        v: (Math.random() * 2 + 1) / 4,
      };
    }

    for (let i = 0; i < 20; i++) {
      f.push(createFirefly());
    }

    function drawFireflies() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < f.length; i++) {
        const firefly = f[i];
        firefly.x += firefly.v * Math.cos(firefly.ang);
        firefly.y += firefly.v * Math.sin(firefly.ang);

        if (firefly.x < 0 || firefly.x > w || firefly.y < 0 || firefly.y > h) {
          f[i] = createFirefly();
        }

        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.s, 0, 2 * Math.PI);
        ctx.fillStyle = "#f67e2b";
        ctx.fill();
      }

      requestAnimationFrame(drawFireflies);
    }

    drawFireflies();

    window.addEventListener("resize", () => {
      setW(window.innerWidth);
      setH(window.innerHeight);
      canvas.minWidth = w;
      canvas.minHeight = h;
    });

    window.addEventListener("click", (e) => {
      f.push({
        x: e.clientX,
        y: e.clientY,
        s: Math.random() * 2,
        ang: Math.random() * 2 * Math.PI,
        v: (Math.random() * 2 + 1) / 4,
      });
    });

    window.addEventListener("mousemove", (e) => {
      f.push({
        x: e.clientX,
        y: e.clientY,
        s: Math.random() * 1,
        ang: Math.random() * 1 * Math.PI,
        v: (Math.random() * 1 + 1) / 4,
      });
    });

    function removeFireflies() {
      f.splice(0, 1);
      setTimeout(removeFireflies, 1000);
    }

    removeFireflies();

  }, [c, w, h, f]);

  return <S.Canvas ref={canvasRef} id="canvas"></S.Canvas>;
}

export default FireflyCanvas;