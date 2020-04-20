import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { BaseCSS } from 'styled-bootstrap-grid';
import StarCover from 'components/StarCover';
import getRandomBackgroundUrl from 'utils/getBackgroundUrl';
import StyledApp from './StyledApp.js';

const Header = lazy(() => import('components/Header'));

function App() {
  const instance = useRef(null);
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'fb.js';
    instance.current.appendChild(scriptTag);
  }, []);
  const backgroundUrl = getRandomBackgroundUrl();
  return (
    <StyledApp fluid backgroundUrl={backgroundUrl}>
      <div ref={instance} />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <StarCover />
      </Suspense>
      <BaseCSS />
    </StyledApp>
  );
}

export default App;
