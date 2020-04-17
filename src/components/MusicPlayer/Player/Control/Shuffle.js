import { Shuffle as ShuffleIcon } from '@styled-icons/zondicons';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const Shuffle = (props) => {
  const { handleClick } = props;

  return <StyledShuffle onClick={handleClick} title="Shuffle" />;
};

const StyledShuffle = styled(ShuffleIcon)`
  ${ControlIcon}
  width: 1rem;
`;

export default Shuffle;
