import { BaseCSS } from 'styled-bootstrap-grid';
import React, { Suspense, lazy } from 'react';
import getRandomBackgroundUrl from 'utils/getBackgroundUrl';
import StyledApp from 'app/StyledApp';

const Header = lazy(() => import('components/Header'));
const StarCover = lazy(() => import('components/StarCover'));
const MusicPlayer = lazy(() => import('components/MusicPlayer'));

function App() {
  const backgroundUrl = getRandomBackgroundUrl();
  return (
    <StyledApp fluid backgroundUrl={backgroundUrl}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {/* <StarCover /> */}
        <MusicPlayer />
      </Suspense>
      <BaseCSS />
    </StyledApp>
  );
}

export default App;
