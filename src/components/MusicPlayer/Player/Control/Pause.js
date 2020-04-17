import { Pause as PauseIcon } from '@styled-icons/zondicons';
import { media } from 'styled-bootstrap-grid';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Pause = (props) => {
  const { handleClick } = props;

  return <StyledPause onClick={handleClick} title="Pause" />;
};

const StyledPause = styled(PauseIcon)`
  ${ControlIcon}
  width: 1.6rem;
  ${media.xs`
    display: inline-block;
  `}
`;

export default Pause;
