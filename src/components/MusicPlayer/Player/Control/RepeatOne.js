import { RepeatOne as RepeatOneIcon } from '@styled-icons/material-sharp';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const RepeatOne = (props) => {
  const { handleClick } = props;

  return <StyledRepeatOne onClick={handleClick} title="RepeatOne" />;
};

const StyledRepeatOne = styled(RepeatOneIcon)`
  ${ControlIcon}
`;

export default RepeatOne;
