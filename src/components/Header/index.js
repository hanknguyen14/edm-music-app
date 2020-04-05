import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import Logo from 'components/Header/Logo';
import React from 'react';
import styled from 'styled-components';
import MenuBar from './Menu/MenuBar';

const Header = () => {
  return (
    <>
      <Wrapper justifyContent="between" alignItems="center">
        <Col col={6}>
          <Logo />
        </Col>
        <Col xs={2} sm={1}>
          <MenuBar />
        </Col>
      </Wrapper>
      <Container>Hello</Container>
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
export default Header;
