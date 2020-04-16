import styled from 'styled-components';
import { Container } from 'styled-bootstrap-grid';

const StyledApp = styled(Container)`
  height: 100%;
  background-image: url(${(props) => props.backgroundUrl});
  background-size: cover;
  background-attachment: initial;
  background-position: center;
`;

export default StyledApp;
