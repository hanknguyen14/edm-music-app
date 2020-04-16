import React, { useRef, useEffect } from 'react';
import starEffect from 'lib/star';

const StarCover = () => {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    starEffect(canvas);
  });
  return <canvas ref={canvasRef} />;
};

export default StarCover;
