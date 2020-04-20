import Backward from 'components/MusicPlayer/Player/Control/Backward';
import Forward from 'components/MusicPlayer/Player/Control/Forward';
import Pause from 'components/MusicPlayer/Player/Control/Pause';
import Play from 'components/MusicPlayer/Player/Control/Play';
import React from 'react';
import Repeat from 'components/MusicPlayer/Player/Control/Repeat';
import RepeatOne from 'components/MusicPlayer/Player/Control/RepeatOne';
import Shuffle from 'components/MusicPlayer/Player/Control/Shuffle';
import TogglePlaylist from 'components/MusicPlayer/Player/Control/TogglePlaylist';

const Control = (props) => {
  const { playing, setPlaying } = props;
  const { repeat, setRepeat } = props;

  return (
    <>
      <Backward handleClick={() => {}} />
      {playing ? (
        <Pause handleClick={() => setPlaying(false)} />
      ) : (
        <Play handleClick={() => setPlaying(true)} />
      )}
      <Forward handleClick={() => {}} />
      <Shuffle handleClick={() => {}} />
      {repeat ? (
        <Repeat handleClick={() => setRepeat(true)} />
      ) : (
        <RepeatOne handleClick={() => setRepeat(false)} />
      )}
      <TogglePlaylist handleClick={() => setPlaying(false)} />
    </>
  );
};

export default Control;
