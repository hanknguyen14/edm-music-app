import { Row } from 'styled-bootstrap-grid';
import {
  ControlCol,
  SeekBarCol,
  SongDetailCol,
  StyledContainer,
} from 'components/MusicPlayer/Player/Styled';
import Control from 'components/MusicPlayer/Player/Control';
import React, { useState, useEffect } from 'react';
import SeekBar from 'components/MusicPlayer/Player/SeekBar';
import SongDetail from 'components/MusicPlayer/Player/SongDetail';
import usePlayer from 'components/MusicPlayer/Player/usePlayer';
import Audio from 'components/MusicPlayer/Player/Audio';
import originalSongs from 'utils/songs';
import { shuffleArray } from 'utils/helpers';

const Player = () => {
  const {
    audioRef,
    songIndex,
    duration,
    currentTime,
    playing,
    shuffle,
    repeat,
    setPlaying,
    setClickedTime,
    setShuffle,
    setBackward,
    setForward,
    onEnded,
    setRepeat,
  } = usePlayer(originalSongs);

  const [songs, setSongs] = useState(originalSongs);

  useEffect(() => {
    const shuffleSongs = shuffleArray(originalSongs);
    shuffle ? setSongs(shuffleSongs) : setSongs(originalSongs);
  }, [shuffle]);

  return (
    <StyledContainer>
      <Row alignItems="center">
        <ControlCol col={5} sm={6} md={4} lg={3}>
          <Control
            playing={playing}
            setPlaying={setPlaying}
            setBackward={setBackward}
            setForward={setForward}
            setShuffle={() => setShuffle(!shuffle)}
            shuffle={shuffle}
            repeat={repeat}
            setRepeat={setRepeat}
          />
        </ControlCol>
        <SeekBarCol sm={2} md={5} lg={6}>
          <SeekBar
            duration={duration}
            currentTime={currentTime}
            onTimeUpdate={(time) => setClickedTime(time)}
          />
        </SeekBarCol>
        <SongDetailCol>
          <SongDetail
            thumbnail={songs[songIndex].thumbnail}
            title={songs[songIndex].title}
            artist={songs[songIndex].artist}
          />
        </SongDetailCol>
      </Row>
      <Audio audioRef={audioRef} src={songs[songIndex].src} onEnded={onEnded} />
    </StyledContainer>
  );
};

export default Player;
