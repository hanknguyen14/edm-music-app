import React from 'react';
import styled from 'styled-components';

const MenuBar = () => {
  return (
    <a href="/">
      <Line />
      <Line />
      <Line />
    </a>
  );
};

const Line = styled.span`
  background: ${(props) => props.theme.colors.primaryWhite};
  height: 2px;
  width: 17px;
  margin-bottom: 3px;
  display: block;
`;

export default MenuBar;
