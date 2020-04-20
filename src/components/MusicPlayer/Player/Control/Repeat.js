import { Repeat as RepeatIcon } from '@styled-icons/material-sharp';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Repeat = (props) => {
  const { handleClick } = props;

  return <StyledRepeat onClick={handleClick} title="Repeat" />;
};

const StyledRepeat = styled(RepeatIcon)`
  ${ControlIcon}
`;

export default Repeat;
