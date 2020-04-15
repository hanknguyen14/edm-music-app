import React, { Suspense, lazy } from 'react';
import { BaseCSS } from 'styled-bootstrap-grid';
import StarCover from 'components/StarCover';
import getRandomBackgroundUrl from 'utils/getBackgroundUrl';
import StyledApp from './StyledApp.js';

const Header = lazy(() => import('components/Header'));

function App() {
  const backgroundUrl = getRandomBackgroundUrl();
  return (
    <StyledApp fluid backgroundUrl={backgroundUrl}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <StarCover />
      </Suspense>
      <BaseCSS />
    </StyledApp>
  );
}

export default App;
