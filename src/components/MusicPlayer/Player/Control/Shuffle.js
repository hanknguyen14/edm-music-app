import { Shuffle as ShuffleIcon } from '@styled-icons/zondicons';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Shuffle = (props) => {
  const { shuffle, handleClick } = props;
  return (
    <StyledShuffle shuffle={shuffle} onClick={handleClick} title="Shuffle" />
  );
};

const StyledShuffle = styled(ShuffleIcon)`
  ${ControlIcon}
  color: ${(props) =>
    props.shuffle
      ? props.theme.colors.primaryRed
      : props.theme.colors.primaryWhite};
  width: 1rem;
`;

export default Shuffle;
