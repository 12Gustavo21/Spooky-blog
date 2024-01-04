import React from "react";

//React icons
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

//Style
import * as S from "./style";

//Atropos
import { Atropos } from "atropos/react";

export default function Cards({ project }) {
  return (
    <>
      {project.cards.map((card, index) => (
        <Atropos
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
          key={index}
        >
          <div className="atropos atropos-header w-full atropos-rotate-touch-scroll-y atropos-rotate-touch">
            <div className="atropos-scale">
              <div className="atropos-rotate">
                <div className="atropos-inner">
                  <S.Card>
                    <S.CardWrapper>
                      <S.CardImage
                        src={card.projectImage.url}
                        alt={`${card.projectName} project preview`}
                        title={`${card.projectName} project preview`}
                        data-atropos-offset="-3"
                      />
                      <div>
                        <h3 data-atropos-offset="3">{card.projectName}</h3>
                        <div>
                          <a
                            data-atropos-offset="4"
                            href={card.projectDeploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Live Preview"
                          >
                            <CiLink />
                            Live Preview
                          </a>
                          <a
                            data-atropos-offset="4"
                            href={card.projectRepositorie}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Code"
                          >
                            <FaGithub />
                            View Code
                          </a>
                        </div>
                      </div>
                    </S.CardWrapper>
                  </S.Card>
                </div>
              </div>
            </div>
          </div>
        </Atropos>
      ))}
    </>
  );
}
