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

const Player = () => {
  return (
    <StyledContainer>
      <Row alignItems="center">
        <ControlCol col={5} sm={6} md={4} lg={3}>
          <Control />
        </ControlCol>
        <SeekBarCol sm={2} md={5} lg={6}>
          <SeekBar duration={100} currentTime={10} />
        </SeekBarCol>
        <SongDetailCol>
          <SongDetail />
        </SongDetailCol>
      </Row>
    </StyledContainer>
  );
};

export default Player;
