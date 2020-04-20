import { css } from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const ControlIcon = css`
  width: 1.4rem;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryWhite};
  margin-right: 1rem;
  ${media.xs`
    display: none;
  `}
  &:last-of-type {
    margin-right: 0;
  }
`;
export default ControlIcon;
