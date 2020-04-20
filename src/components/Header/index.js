import { Row, Col, media } from 'styled-bootstrap-grid';
import Logo from 'components/Header/Logo';
import React from 'react';
import styled from 'styled-components';
import MenuBar from 'components/Header/Menu/MenuBar';

const Header = () => {
  return (
    <>
      <Wrapper justifyContent="between" alignItems="center">
        <StyledCol col={6}>
          <Logo />
        </StyledCol>
        <StyledCol xs={2} sm={1}>
          <MenuBar />
        </StyledCol>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Row)`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.transparentBlack};
  ${media.md`
    background-color: transparent;
  `}
`;

const StyledCol = styled(Col)`
  z-index: 1;
`;
export default Header;
