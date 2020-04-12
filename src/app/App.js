import React, { Suspense, lazy } from 'react';
import { BaseCSS, Container } from 'styled-bootstrap-grid';
import './App.css';

const Header = lazy(() => import('components/Header'));

function App() {
  return (
    <Container fluid>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <BaseCSS />
    </Container>
  );
}

export default App;
