import { Col, Container, media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;
const PlayerCol = styled(Col)`
  line-height: 1.2rem;
  text-align: center;
`;
const ControlCol = styled(PlayerCol)``;
const SeekBarCol = styled(PlayerCol)`
  ${media.xs`
    display: none;
  `}
  display: inline-block;
`;
const SongDetailCol = styled(PlayerCol)`
  max-width: 11rem;
  ${media.sm`
    text-align: left;
  `}
  ${media.xl`
    max-width: 17rem;
  `}
`;

export { StyledContainer, ControlCol, SeekBarCol, SongDetailCol };
