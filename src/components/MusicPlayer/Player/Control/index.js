import Backward from 'components/MusicPlayer/Player/Control/Backward';
import Forward from 'components/MusicPlayer/Player/Control/Forward';
import Pause from 'components/MusicPlayer/Player/Control/Pause';
import Play from 'components/MusicPlayer/Player/Control/Play';
import React from 'react';
import Repeat from 'components/MusicPlayer/Player/Control/Repeat';
import TogglePlaylist from 'components/MusicPlayer/Player/Control/TogglePlaylist';

const Control = (props) => {
  const {
    playing,
    repeat,
    setPlaying,
    setRepeat,
    setBackward,
    setForward,
  } = props;

  return (
    <>
      <Backward handleClick={setBackward} />
      {playing ? (
        <Pause handleClick={() => setPlaying(false)} />
      ) : (
        <Play handleClick={() => setPlaying(true)} />
      )}
      <Forward handleClick={setForward} />
      <Repeat repeat={repeat} handleClick={setRepeat} />
      <TogglePlaylist handleClick={() => setPlaying(false)} />
    </>
  );
};

export default Control;
