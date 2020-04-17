import { StepBackward as BackwardIcon } from '@styled-icons/zondicons';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Backward = (props) => {
  const { handleClick } = props;

  return <StyledBackward onClick={handleClick} title="Backward" />;
};

const StyledBackward = styled(BackwardIcon)`
  ${ControlIcon}
`;

export default Backward;
