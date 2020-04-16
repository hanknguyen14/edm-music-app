import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <a href="/">
      <Img src="logo.png" alt="Doven" />
    </a>
  );
};

const Img = styled.img`
  vertical-align: middle;
  max-width: 100%;
`;
export default Logo;
