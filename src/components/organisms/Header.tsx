import React from 'react';
import styled from 'styled-components';

interface Props {
  drawerWidth: number;
}

const HeaderView = styled.header<Props>`
  flex-grow: 1;
  margin-left: ${(props) => props.drawerWidth + 'px'};
  background: #37474F;
  h1 {
    text-align: center;
    font-size: 20px;
    margin: 0;
    padding: 4px 0;
    font-weight: 600;
    user-select: none;
  }
`;

export const Header: React.FC<Props> = ({ drawerWidth }) => {
  return (
    <HeaderView drawerWidth={drawerWidth}>
      <h1>My Dashboard</h1>
    </HeaderView>
  );
};
