import { Playlist as PlaylistIcon } from '@styled-icons/zondicons';
import { media } from 'styled-bootstrap-grid';
import ControlIcon from 'components/MusicPlayer/Player/Control/Styled';
import React from 'react';
import styled from 'styled-components';

const TogglePlaylist = (props) => {
  const { handleClick } = props;

  return <StyledPlaylist onClick={handleClick} title="TogglePlaylist" />;
};

const StyledPlaylist = styled(PlaylistIcon)`
  ${ControlIcon}
  width: 1rem;
  ${media.xs`
    display: inline-block;
  `}
`;

export default TogglePlaylist;
