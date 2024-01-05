import styled from "styled-components";

export const ButtonBox = styled.section`
  .scroll-to-top-button {
    display: none;
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: #181818;
    border: 0.125rem solid #666;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    z-index: 9;
    transition: all 0.3s ease-in-out;

    img {
      width: 3rem;
      height: 3rem;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      border-color: #ff6000;

      img {
        filter: sepia(100%) saturate(100%) brightness(100%) contrast(100%);
      }
    }
  }

  .scroll-to-top-button.visible {
    display: block;
    opacity: 1;
  }
`;
