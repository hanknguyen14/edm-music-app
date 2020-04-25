import { media } from 'styled-bootstrap-grid';
import React from 'react';
import styled from 'styled-components';
import StyledImg from 'components/Theme/Img';

const SongDetail = (props) => {
  const { thumbnail, title, artist } = props;

  return (
    <>
      <Thumbnail>
        <Img src={thumbnail} alt="Thumbnail" />
      </Thumbnail>
      <Title>{title}</Title>
      <Artist>{artist}</Artist>
    </>
  );
};

const StyledSongInfo = styled.div`
  color: ${(props) => props.theme.colors.primaryWhite};
  overflow: hidden;
  letter-spacing: 0.2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fonts.fontSizeSmall};
  ${media.sm`
    padding-left: 2.2rem;
  `}
`;
const Thumbnail = styled.div`
  position: absolute;
  top: 0.2rem;
  ${media.xs`
    display: none;
  `}
`;
const Img = styled(StyledImg)`
  width: 2rem;
  height: 2rem;
`;
const Title = styled(StyledSongInfo)``;
const Artist = styled(StyledSongInfo)``;

export default SongDetail;
