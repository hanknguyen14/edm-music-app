import React from 'react';
import styled from 'styled-components';
import logo from 'static/logo.png';

const Logo = () => {
  return (
    <a href="/">
      <Img src={logo} alt="Doven" />
    </a>
  );
};

const Img = styled.img`
  vertical-align: middle;
  max-width: 100%;
`;
export default Logo;
