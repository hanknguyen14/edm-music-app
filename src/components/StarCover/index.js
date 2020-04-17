import React, { useRef, useEffect } from 'react';
import starEffect from 'lib/star';
import styled from 'styled-components';

const StarCover = () => {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    starEffect(canvas);
  });
  return <StyledCanvas ref={canvasRef} />;
};

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
`;

export default StarCover;
