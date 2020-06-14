import {
  Remove as MinimizeIcon,
  Add as MaximizeIcon,
} from '@styled-icons/material-sharp';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled, { css } from 'styled-components';

const TogglePlayer = (props) => {
  const { show, handleClick } = props;

  return show ? (
    <StyledMinimize onClick={handleClick} title="Minimize" />
  ) : (
    <StyledMaximize onClick={handleClick} title="Maximize" />
  );
};

const TogglePlayerIcon = css`
  ${ControlIcon}
  position: absolute;
  right: 0;
  width: 1rem;
`;

const StyledMinimize = styled(MinimizeIcon)`
  ${TogglePlayerIcon}
`;

const StyledMaximize = styled(MaximizeIcon)`
  ${TogglePlayerIcon}
`;

export default TogglePlayer;
