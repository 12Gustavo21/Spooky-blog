import Spline from '@splinetool/react-spline';

//Scene
import Scene from './forest_lights.spline'

import styled from 'styled-components';

const SplineWrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default function Index() {
  return (
    <SplineWrapper>
      <Spline scene={Scene} />
    </SplineWrapper>
  );
}