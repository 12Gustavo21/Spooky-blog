import React from "react";

//React icons
import { FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

export default function Cards({ project }) {
  return (
    <>
      {project.cards.map((card, index) => (
        <div key={index}>
          <div>
            <img
              src={card.projectImage.url}
              alt={`${card.projectName} project preview`}
            />
          </div>
          <div>
            <h3>{card.projectName}</h3>
            <div>
              <a
                href={card.projectDeploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLink />
                Live Preview
              </a>
              <a
                href={card.projectRepositorie}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
