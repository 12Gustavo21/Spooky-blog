import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #0a0b0c;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 8rem;
`;

export const CanvasWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
`;

export const ContactWrapper = styled.div`
  width: 90%;
  min-height: 30vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;

export const FormContact = styled.form`
  width: 90%;
  min-height: 30vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;