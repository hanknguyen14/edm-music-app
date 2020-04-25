import { Row } from 'styled-bootstrap-grid';
import {
  ControlCol,
  SeekBarCol,
  SongDetailCol,
  StyledContainer,
} from 'components/MusicPlayer/Player/Styled';
import Control from 'components/MusicPlayer/Player/Control';
import React from 'react';
import SeekBar from 'components/MusicPlayer/Player/SeekBar';
import SongDetail from 'components/MusicPlayer/Player/SongDetail';
import usePlayer from 'components/MusicPlayer/Player/usePlayer';
import Audio from 'components/MusicPlayer/Player/Audio';
import songs from 'utils/songs';

const Player = () => {
  const {
    audioRef,
    audioIndex,
    duration,
    currentTime,
    playing,
    shuffle,
    setPlaying,
    setClickedTime,
    setShuffle,
    setBackward,
    setForward,
    onEnded,
  } = usePlayer(songs);

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
            thumbnail={songs[audioIndex].thumbnail}
            title={songs[audioIndex].title}
            artist={songs[audioIndex].artist}
          />
        </SongDetailCol>
      </Row>
      <Audio
        audioRef={audioRef}
        src={songs[audioIndex].src}
        onEnded={onEnded}
      />
    </StyledContainer>
  );
};

export default Player;
