import styled from "styled-components";

export const ContentWrapper = styled.section`
  width: 90%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  .atropos {
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 19.88rem;

    .atropos-scale {
      width: 11rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(25, 25, 25, 0.9) 0%,
        rgba(0, 11, 29, 0.7) 60%
      );
      border-radius: 1.5rem;

      .atropos-rotate {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        img {
          width: 6rem;
          height: 6rem;
          object-fit: contain;
        }
      }
    }
  }

  @media only screen and (width < 768px) {
    width: 90%;
    gap: 0.5rem;

    .atropos {
      width: 8rem;
      height: 8rem;
      flex: 1 1 10rem;

      .atropos-scale {
        width: 10rem;
        height: 100%;

        .atropos-rotate {
          img {
            width: 5rem;
            height: 5rem;
          }
        }
      }
    }
  }
`;
