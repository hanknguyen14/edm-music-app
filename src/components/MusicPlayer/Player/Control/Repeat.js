import {
  Repeat as RepeatIcon,
  RepeatOne as RepeatOneIcon,
} from '@styled-icons/material-sharp';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Repeat = (props) => {
  const { repeat, handleClick } = props;
  return repeat === 1 ? (
    <StyledRepeatOne onClick={() => handleClick(0)} title="RepeatOne" />
  ) : (
    <StyledRepeat
      repeat={repeat}
      onClick={() => (repeat ? handleClick(1) : handleClick(2))}
      title="Repeat"
    />
  );
};

const StyledRepeat = styled(RepeatIcon).attrs((props) => ({
  color: props.repeat
    ? props.theme.colors.primaryRed
    : props.theme.colors.primaryWhite,
}))`
  ${ControlIcon}
  color: ${(props) => props.color};
`;

const StyledRepeatOne = styled(RepeatOneIcon)`
  ${ControlIcon}
  color: ${(props) => props.theme.colors.primaryRed};
`;

export default Repeat;
