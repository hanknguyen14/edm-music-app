import { Play as PlayIcon } from '@styled-icons/zondicons';
import { media } from 'styled-bootstrap-grid';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Play = (props) => {
  const { handleClick } = props;

  return <StyledPlay onClick={handleClick} title="Play" />;
};

const StyledPlay = styled(PlayIcon)`
  ${ControlIcon}
  width: 1.6rem;
  ${media.xs`
    display: inline-block;
  `}
`;

export default Play;
