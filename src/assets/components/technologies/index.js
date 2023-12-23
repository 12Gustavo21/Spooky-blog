import React, { useEffect } from 'react';

//Styles
import * as S from './style';

//Atropos
import Atropos from 'atropos/react';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cards({ tech }) {

  useEffect(() => {
    AOS.init();
  });

  return (
    <S.ContentWrapper>
      <Atropos>
        {tech.technology.map((technology, index) => (
          <div className="atropos atropos-header w-full atropos-rotate-touch-scroll-y atropos-rotate-touch">
            <div className='atropos-scale'>
              <a href={technology.docs} target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="2000" key={index}>
                <div className='atropos-rotate'>
                  <div className='atropos-inner'>
                    <img src={technology.technologyImage} alt={technology.name} title={technology.name} width={50} data-atropos-offset="3" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </Atropos>
    </S.ContentWrapper>
  );
}