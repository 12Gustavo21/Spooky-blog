import { useEffect } from 'react';

// Importando o GIF
import batGif from '../../gifs/bat.gif';

const HalloweenBats = ({ numberOfBats }) => {
  useEffect(() => {
    const random = Math.random();
    const documentRef = document;
    const windowRef = window;

    // Função para criar um morcego
    const createBat = () => {
      const image = documentRef.createElement('img');
      const container = documentRef.createElement('div');
      const containerStyle = container.style;

      containerStyle.position = 'fixed';
      containerStyle.left = 0;
      containerStyle.top = 0;
      containerStyle.opacity = 0;
      containerStyle.filter = 'invert(.2)';

      container.appendChild(image);
      image.src = batGif;

      documentRef.body.appendChild(container);

      let posX = windowRef.innerWidth * random;
      let posY = windowRef.innerHeight * random;
      let opacity = 0;

      function calculatePosition(oldPos, max) {
        return Math.max(Math.min(oldPos + (Math.random() - 0.5) * 400, max - 50), 50);
      }

      function animate() {
        const newX = calculatePosition(posX, windowRef.innerWidth);
        const newY = calculatePosition(posY, windowRef.innerHeight);
        const distance = 5 * Math.sqrt((posX - newX) * (posX - newX) + (posY - newY) * (posY - newY));

        containerStyle.opacity = opacity;
        opacity = 1;

        containerStyle.transition = containerStyle.transition = distance / 1000 + 's linear';
        containerStyle.transform = containerStyle.transform = 'translate(' + newX + 'px,' + newY + 'px)';
        image.style.transform = image.style.transform = posX > newX ? '' : 'scaleX(-1)';

        posX = newX;
        posY = newY;

        setTimeout(animate, distance);
      }

      setTimeout(animate, random * 3000);

      return () => {
        documentRef.body.removeChild(container);
      };
    };

    for (let i = 0; i < numberOfBats; i++) {
      createBat();
    }
  }, [numberOfBats]);

  return null;
};

export default HalloweenBats;