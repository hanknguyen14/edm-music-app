import { StepForward as ForwardIcon } from '@styled-icons/zondicons';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Forward = (props) => {
  const { handleClick } = props;

  return <StyledForward onClick={handleClick} title="Forward" />;
};

const StyledForward = styled(ForwardIcon)`
  ${ControlIcon}
`;

export default Forward;
