import React from 'react';

const Audio = (props) => {
  const { audioRef, src, onEnded } = props;
  return (
    <audio ref={audioRef} src={src} onEnded={onEnded}>
      <track kind="captions" />
      Your browser does not support the <code>audio</code> element.
    </audio>
  );
};
export default Audio;
