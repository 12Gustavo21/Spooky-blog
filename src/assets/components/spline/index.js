import React, { useRef } from 'react';

//Spline
import Spline from '@splinetool/react-spline';

//Scene
//import Scene from './forest_lights.spline'

import styled from 'styled-components';

const SplineWrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default function Index() {
  const spline = useRef();

  function onLoad(splineApp) {
    spline.current = splineApp;
  }

  return (
    <SplineWrapper>
      <Spline scene="https://prod.spline.design/S3Qgq1Vvqz8Fz97L/scene.splinecode" onLoad={onLoad} />
    </SplineWrapper>
  );
}