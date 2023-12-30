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
    flex: 1 1 15rem;

    .atropos-scale {
      width: 11rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 11, 29, .7);
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
`;
